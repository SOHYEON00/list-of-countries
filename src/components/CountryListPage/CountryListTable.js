import React, {useState} from 'react'
import {connect} from "react-redux";
import {actionCreators} from "../../store";
import CountryRow from "./CountryListTable/CountryRow";
import CategoryRow from "./CountryListTable/CategoryRow";

function CountryListTable({countries}) {
    let categoryList = [];
    let countryList = [];

    if(!isNaN(countries) || countries !== undefined){
        if(countries.length > 0){

      categoryList = Object.keys(countries[0]).map((e,i) => {
          return <CategoryRow subject={e} key={i} />
      });

      countryList = countries.map((e,i) => {
             return <CountryRow 
                {...e}
                // name={e.name} 
                // alphaCode={e.alpha2Code} 
                // callingCode={e.callingCode} 
                // capital={e.capital} 
                // region={e.region} 
                id={i}
                key={i}
                />
      })
    } }
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

const mapStateToProps = (state) => {
    //초기 data가 이중배열이므로 검사
    if(state.length === 1) { //초기 데이터 
         return {countries: state[0]};
    } else { //state가 변환된 후 
        return {countries: state};
    }
}

export default connect(mapStateToProps)(CountryListTable);
