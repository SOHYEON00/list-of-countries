import React from 'react';
import SortingButton from "./SortingButton";

function CategoryRow({subject}) {

    return (
        <th>
            {subject}
            <SortingButton />
        </th>
    )
}

export default CategoryRow
