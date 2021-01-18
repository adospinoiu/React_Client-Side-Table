import React, { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS, GROUPED_COLUMNS } from './columns';
import './BasicTable.css'

export const PaginationTable = () => {

    // By using the useMemo() you ensure that the table is not re-rendered every time. Otherwise, react would think it is receiving new data every time.
    // #############################################################################
    // By using the line below, with GROUPED_COLUMNS, it creates a secondary "header/footer group" above the main header/footer that groups the columns. The grouping is dictated by the arrangement in columns.js 
    // const columns = useMemo(() => GROUPED_COLUMNS, [])
    // #############################################################################
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])


    // These are functions from the useTable HOOK from the react-table-package that are provided that can be accessed to create a table
    // The 'columns' and 'data' are information being used to create the "table columns" and the "data in the columns"
    const {
        getTableProps,          // This is a function
        getTableBodyProps,      // This is a function
        headerGroups,           // This is an array
        page,
        nextPage,               // This allows for the 'page movement buttons'
        previousPage,           // This allows for the 'page movement buttons'
        canNextPage,            // This allows for the 'page movement buttons'
        canPreviousPage,        // This allows for the 'page movement buttons'
        pageOptions,            // This allows for the 'page preview' (i.e. x of x)
        gotoPage,               // This allows for the 'go to specific page' entry field
        pageCount,              // This allows for the 'go to specific page' entry field
        setPageSize,
        state,                  
        prepareRow,
    } = useTable({
        columns,
        data,
        initialState: { pageIndex: 0}       // This sets the initial page of the table unpon loading
    },
        usePagination)

    const { pageIndex, pageSize } = state;

    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div>
                {/* This shows a page index so the user knows how many total pages there are */}
                <span>Page{' '}<strong>{pageIndex + 1} of {pageOptions.length}</strong>{' '}</span>

                {/* This is the entry field so the user can go to a specific page number */}
                <span>
                    | Go to page: {' '}
                    <input type='number' defaultValue={pageIndex + 1}
                    onChange={e => {
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(pageNumber)
                    }}
                    style={{width: '50px'}} />
                </span>

                {/* This is the entry field so the user can select how many rows per page that should be displayed. (i.e. 10, 25, 50) */}
                <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                    {
                        [10, 25, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                    </option>
                ))}
                </select>

                {/* These are the buttons that allow the user to move through the various pages of the table */}
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
            </div>
        </div>
    )
}