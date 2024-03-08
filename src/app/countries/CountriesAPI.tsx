'use client'
import axios from "axios";
import { useEffect, useState } from "react";

const CountriesAPI = () => { 
    const [countries, setCountries] = useState([]); 

    const getCountriesInfo = async () => {
        const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,capital");
        console.log(response);
        if (response.data){
            setCountries(response.data);
        }  
    }
    useEffect(() => {
        getCountriesInfo();
    }, []); 

    return <h1>Countries API will be here</h1>
}
export default CountriesAPI;