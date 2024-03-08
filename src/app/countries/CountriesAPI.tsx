'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";


interface CountryDetails {
    capital: string[];
    name: CountryInfo;
}
 
interface CountryInfo {
    common: string;
    official: string;
    nativeName: NativeNames;
}
 
interface LanguageDetails {
    official: string;
    common: string;
}
 
interface NativeNames {
    [key: string]: LanguageDetails;
}
 

const CountriesAPI = () => { 
    const [countries, setCountries] = useState<CountryDetails[]>([]); 

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

    return (
        <div>
           {countries.map((country, index) => (
            <Card style={{ width: '18rem' }}key={`${country.capital}_${index}`}>
                <div key={`${country.capital[0]}${index}`}>
            <h2>{country.capital[0]}</h2>
      <p> Country Official name: {country.name.official} </p>
     
      {Object.entries(country.name.nativeName).map(([key, value]) => (
    <div key={key}>
            {key}: {value.common}
        <p>{value.common}</p>
        <p>{value.official}</p>
    </div>
))}
    </div>
  </Card>
))} 
    
        </div>
    );
}
export default CountriesAPI;