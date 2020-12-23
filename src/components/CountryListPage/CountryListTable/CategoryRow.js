import React from 'react';
import SortingButton from "./SortingButton";

function CategoryRow({subject}) {

    return (
        <th>
            {subject}
            <button>ASCE</button>
            <button>DESC</button>
        </th>
    )
}

export default CategoryRow
