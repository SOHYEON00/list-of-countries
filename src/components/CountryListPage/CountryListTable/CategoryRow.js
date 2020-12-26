import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {connect} from "react-redux";
import {sortingListASCE, sortingListDESC} from "../../../store/module/tableReducers";

function CategoryRow({subject, dataList, actionDesc, actionAsce}) {

    const asceBtn = () => {
         actionAsce(dataList);
    }

    const descBtn = () => {
        actionDesc(dataList);
    }

    return (
        <th className="tableContents">
            {subject}
            <p>
            <button onClick={asceBtn}>ASCE</button>
            <button onClick={descBtn}>DESC</button>
            </p>
        </th>
    )
}

function mapStateToProps(state) {

  return { dataList: state.CountryReducer.data}
}

//
function mapDispatchToProps(dispatch,props) {
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
              return a.alpha2Code < b.alpha2Code ? -1 : a.alpha2Code > b.alpha2Code? 1: 0;}) 
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
      
      return {
        actionDesc: (dataList) => {
          const sorted = sortByCategory(props.subject, dataList);
          dispatch(sortingListDESC(props.subject, sorted.sortedData.reverse()))
        } ,
        actionAsce: dataList => {
          const sorted = sortByCategory(props.subject, dataList);
          dispatch(sortingListASCE(props.subject, sorted.sortedData))
        } 
      } 
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryRow);
