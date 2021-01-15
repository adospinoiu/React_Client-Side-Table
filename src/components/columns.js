// These are the columns that will be rendered to the client
// The 'Header' is the title of the column that will show up on the client side
// The 'accessor' is the WAY the data will be accessed from the MOCK_DATA.json file

export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id'
    },
    {
        Header: 'First Name',
        accessor: 'first_name'
    },
    {
        Header: 'Last Name',
        accessor: 'last_name'
    },
    {
        Header: 'Date of Birth',
        accessor: 'date_of_birth'
    },
    {
        Header: 'Country',
        accessor: 'country'
    },
    {
        Header: 'Phone',
        accessor: 'phone'
    },
]