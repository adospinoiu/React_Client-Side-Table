// The code below affects only the GlobalFilter section. It introduces a 1-second delay in the search/filter dispaly of the table. When the user stops typing, THEN the filter/sort is run and after a second delay the results are shown for the user. Basically a "delay" ...

import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

export const GlobalFilter = ({ filter, setFilter}) => {
    const [value, setValue] = useState(filter);
    
    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 1000)

    return(
        <span>
            Search: {' '}
            <input 
                value={value || ''} 
                onChange={(e) => {
                    setValue(e.target.value)
                    onChange(e.target.value)
                }}
            />
        </span>
    )
}



// The code below affects only the GlobalFilter section. The code below enables the table to search and filter as soon as the user starts typing in the field. The table will immediately start filtering as the input is changing.

// import React from 'react';

// export const GlobalFilter = ({ filter, setFilter}) => {
//     return(
//         <span>
//             Search: {' '}
//             <input value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
//         </span>
//     )
// }