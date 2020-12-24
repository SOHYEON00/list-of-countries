import React, {useState} from 'react'
import {useSelector, connect} from "react-redux";
import {actionCreators} from "../../store/module/tableReducers";
import CountryRow from "./CountryListTable/CountryRow";
import CategoryRow from "./CountryListTable/CategoryRow";

function CountryListTable({loading, dataList}) {
    let arrCategory = [];
    let arrCountry = [];

    if(loading){
          arrCategory = Object.keys(dataList[0]).map((e,i) => {
          return <CategoryRow subject={e} key={i} />
      });

      arrCountry = dataList.map((e,i) => {
             return <CountryRow 
                {...e}
                id={i}
                key={i}
                />
      })
    } 
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>DEL</th>
                        {arrCategory}
                    </tr>
                </thead>
                <tbody>
                {arrCountry}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => {

    const reducer = state.CountryReducer;
    if(reducer.data.length === 0 ) {
        return { loading: false, dataList: []}
    } else {
        return {
            loading: true,
            dataList: reducer.data
        }   
    }
    
}

export default connect(mapStateToProps)(CountryListTable);