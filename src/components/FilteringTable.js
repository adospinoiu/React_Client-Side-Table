import React, { useMemo } from 'react';
import { useTable, useGlobalFilter, useFilters } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS, GROUPED_COLUMNS } from './columns';
import { GlobalFilter } from './GlobalFilter';
import './BasicTable.css'

export const FilteringTable = () => {

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
        footerGroups,           // This is an array
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable({
        columns,
        data,
    }, 
    useFilters,
    useGlobalFilter)

    const { globalFilter } = state

    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}
                                <div>{column.canFilter ? column.render('Filter') : null</div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
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
                <tfoot>
                    {footerGroups.map((footerGroup) => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {footerGroup.headers.map((column) => (
                                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </table>
        </>
    )
}