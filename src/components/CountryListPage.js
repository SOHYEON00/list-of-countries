import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getCountries} from "../store/module/tableReducers";
import SearchBar from "./CountryListPage/SearchBar";
import NewCountryForm from "./CountryListPage/NewCountryForm";
import CountryListTable from "./CountryListPage/CountryListTable";

function CountryListPage({getNewList}) {

  
    useEffect(() => {
        getNewList();
    }, []);

    return (
        <>
            <SearchBar />
            <NewCountryForm />
            <CountryListTable/>  
        </>
    )

}


function mapDispatchToProps(dispatch) {
    return { getNewList : () => {dispatch(getCountries())} };
}
export default connect(null, mapDispatchToProps)(CountryListPage);