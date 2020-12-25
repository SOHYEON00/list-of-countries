import React, {useEffect, useState} from 'react';
import { useSelector, shallowEqual, connect } from "react-redux";
import {getCountries} from "../store/module/tableReducers";
import SearchBar from "./CountryListPage/SearchBar";
import NewCountryForm from "./CountryListPage/NewCountryForm";
import CountryListTable from "./CountryListPage/CountryListTable";

function CountryListPage({getNewList}) {
    
    const [Keyword, setKeyword] = useState("");
    const debouncedHandleChange = (target) => {
        setKeyword(target);
      };

    const { loading, error,data, originalState} = useSelector(
        (state) => (
            {
          loading: state.CountryReducer.loading,

          data: state.CountryReducer.data,
          error: state.CountryReducer.error,
        }),
        shallowEqual
      );
    // const  data  = useSelector(state => {
    //     // 검색 시작한 경우(search: true)
    //     if(state.searchReducer.search){
    //         return state.searchReducer.data;
    //     } 
    //     // 검색하지 않은 경우
    //     return state.CountryReducer.data;
    // })


    useEffect(() => {
        getNewList();
    }, []);

    return (
        <>
            <SearchBar 
                state={data}
                debouncedHandleChange={debouncedHandleChange} 
                keyword={Keyword}/>
            <NewCountryForm />
            <CountryListTable loading={loading} error={error} list={data}  />  
        </>
    )

}

function mapDispatchToProps(dispatch) {
    return { getNewList : () => {dispatch(getCountries())} };
}
export default connect(null, mapDispatchToProps)(CountryListPage);