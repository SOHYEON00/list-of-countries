import React, {useEffect, useState} from 'react';
import { useSelector, connect } from "react-redux";
import {getCountries} from "../store/module/tableReducers";
import SearchBar from "./CountryListPage/SearchBar";
import NewCountryForm from "./CountryListPage/NewCountryForm";
import CountryListTable from "./CountryListPage/CountryListTable";

function CountryListPage({getNewList}) {
    
    const [Keyword, setKeyword] = useState("");
    const [Name, setName] = useState("");
    const [Alpah2Code, setAlpah2Code] = useState("");
    const [CallingCode, setCallingCode] = useState([]);
    const [Capital, setCapital] = useState("");
    const [Region, setRegion] = useState("");


    const debouncedHandleChange = (target) => {
        setKeyword(target);
      };

    const { loading, error,data, search, searchData} = useSelector(
        (state) => (
            {
          loading: state.CountryReducer.loading,
          data: state.CountryReducer.data,
          error: state.CountryReducer.error,
          search: state.searchReducer.search,
          searchData: state.searchReducer.data
        })
      );

    useEffect(() => {
        getNewList();
    }, []);

    return (
        <>
            <SearchBar 
                state={data}
                debouncedHandleChange={debouncedHandleChange} 
                keyword={Keyword}/>
            <NewCountryForm 
            />
            <CountryListTable loading={loading} error={error} list={data} searchStatus={search} filteredData={searchData} />  
        </>
    )

}

function mapDispatchToProps(dispatch) {
    return { getNewList : () => {dispatch(getCountries())} };
}
export default connect(null, mapDispatchToProps)(CountryListPage);