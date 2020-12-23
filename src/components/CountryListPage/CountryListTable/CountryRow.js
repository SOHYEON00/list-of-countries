import React from 'react'
import {connect} from "react-redux";
// {name, alphaCode, callingCode, capital,region,key  }
function CountryRow( {name, alphaCode, callingCode, capital,region}) {
  
    return (
        <tr>
            <td><button>DEL</button></td>
            <td>{name}</td>
            <td>{alphaCode}</td>
            <td>{callingCode}</td>
            <td>{capital}</td>
            <td>{region}</td>
        </tr>
    )
}

export default CountryRow;
