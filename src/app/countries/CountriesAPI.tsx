'use client'
import axios from "axios";
import { useEffect, useState } from "react";

interface CountryCapital  {
  capital : string[];
}  

const CountriesAPI = () => { 
    const [countries, setCountries] = useState<CountryCapital[]>([]); 

    const getCountriesInfo = async () => {
        const response = await axios.get("https://restcountries.com/v3.1/all?fields=capital");
        console.log(response);
        if (response.data){
            setCountries(response.data);
        }  
    }
    useEffect(() => {
        getCountriesInfo();
    }, []); 

    return (
        <div>
            {countries.map((country) => (        
                <div key={country.capital[0]}>
                    <h2>{country.capital[0]}</h2>
                </div>
            ))}
        </div>
    );
}
export default CountriesAPI;