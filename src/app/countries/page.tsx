import CountriesAPI from "./CountriesAPI";
import CountriesDetail from "./CountriesDetail";

const mockData = [
    {
        name: "Afghanistan",
        capital: "Kabul",
        population: 27657145,
        area: 652230,
        flag: "https://restcountries.eu/data/afg.svg",
    },
    {
        name: "Åland Islands",
        capital: "Mariehamn",
        population: 28875,
        area: 1580,
        flag: "https://restcountries.eu/data/ala.svg",
    },
    {
        name: "Albania",
        capital: "Tirana",
        population: 2886026,
        area: 28748,
        flag: "https://restcountries.eu/data/alb.svg",
    },
]

const countries = () => {
    return (
        <div>
        <h1>Countries list will be here</h1>
        <CountriesDetail countries={mockData}/>
        <CountriesAPI/>
        </div>
    );
}

export default countries;