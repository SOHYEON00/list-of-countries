import React, {useState} from 'react'
import {connect} from "react-redux";
import {actionCreators} from "../../store";
import CountryRow from "./CountryListTable/CountryRow";
import CategoryRow from "./CountryListTable/CategoryRow";

function CountryListTable({country}) {
    let categoryList = [];
    let countryList = [];

    if(country.length > 0){
      categoryList = Object.keys(country[0][0]).map((e,i) => {
          console.log(e);
          return <CategoryRow subject={e} key={i} />
      });
      countryList = country[0].map((e,i) => {
             return <CountryRow 
                name={e.name} 
                alphaCode={e.alpha2Code} 
                callingCode={e.callingCode} 
                capital={e.capital} 
                region={e.region} 
                key={i}
                />
      })
    }
    console.log(categoryList);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>DEL</th>
                        {categoryList}
                    </tr>
                </thead>
                <tbody>
                {countryList}
                </tbody>
            </table>
        </div>
    )
}

// function mapStateToProps(state, props) {
//     return { country: state};
// }


export default CountryListTable;
