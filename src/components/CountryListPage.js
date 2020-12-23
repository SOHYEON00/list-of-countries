import React, {useEffect, useState} from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {actionCreators} from "../store";
import SearchBar from "./CountryListPage/SearchBar";
import NewCountryForm from "./CountryListPage/NewCountryForm";
import CountryListTable from "./CountryListPage/CountryListTable";

function CountryListPage({newCountry}) {

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name;region;callingCodes')
            .then((response) => {
                const data = response.data;
                newCountry(data);
            })
            .catch(e => { console.error(e); })
        
    }, [])

    return (
        <>
            <SearchBar />
            <NewCountryForm />
            <CountryListTable/>  
        </>
    )

}
  
function mapDispatchToProps(dispatch){

    return {
        newCountry : (Countries) => { dispatch(actionCreators.getNewList(Countries))}
    }
}

export default connect(null, mapDispatchToProps)(CountryListPage)
