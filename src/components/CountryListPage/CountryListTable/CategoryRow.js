import React from 'react';
import {useSelector, shallowEqual, useDispatch} from "react-redux";
import {connect} from "react-redux";
import {sortingListASCE, sortingListDESC} from "../../../store/module/tableReducers";

function CategoryRow({subject}) {
    const dispatch = useDispatch();

    const  {state}  = useSelector(state => ({state: state.CountryReducer.data}))


    const sortByCategory = (category,oriState) => {
      
        switch (category) {
            case "name":
              return {
                sortedData: oriState.sort((a, b) => {
                  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                }),
              };
            case "alpha2Code":
              return {
                sortedData: oriState.sort((a, b) => {
                  return a.alpha2Code < b.alpha2Code
                    ? -1
                    : a.alpha2Code > b.alpha2Code
                    ? 1
                    : 0;
                }),
              };
            case "callingCodes":
              const exceptNaN = oriState.filter(e => parseInt(e.callingCodes[0]) )
              const onlyNaN = oriState.filter(e => !parseInt(e.callingCodes[0]) )

              exceptNaN.sort((a,b) => {
  
                return parseInt(a.callingCodes[0]) < parseInt(b.callingCodes[0]) ? -1 
                : parseInt(a.callingCodes[0]) > parseInt(b.callingCodes[0]) ? 1 : 0
              })
              return {
                sortedData: onlyNaN.concat(exceptNaN)
              };
            case "capital":
              return {
                sortedData: oriState.sort((a, b) => {
                  return a.capital < b.capital ? -1 : a.capital > b.capital ? 1 : 0;
                }),
              };
            case "region":
              return {
                sortedData: oriState.sort((a, b) => {
                  return a.region < b.region ? -1 : a.region > b.region ? 1 : 0;
                }),
              };
            default:
              return { sortedData: oriState };
    }
}


    const asceBtn = () => {
        const sorted = sortByCategory(subject, state);
        dispatch(sortingListASCE(subject, sorted.sortedData));
    }

    const descBtn = () => {
        const sorted = sortByCategory(subject, state);
        dispatch(sortingListDESC(subject, sorted.sortedData.reverse()));
    }

    return (
        <th>
            {subject}
            <p>
            <button onClick={asceBtn}>ASCE</button>
            <button onClick={descBtn}>DESC</button>
            </p>
        </th>
    )
}


export default connect(null)(CategoryRow);
