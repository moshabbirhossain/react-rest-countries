import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import "./Countries.css"

const Countries = () => {
    const [countries, setCountries] =useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data));
    },[]);

    const handleVisitedCountry = country => {
        console.log('This is visited country list');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    };
    return (
        <div>
            <h1 className="mx-auto w-fit">Countries: {countries.length}</h1>
            <div className="mx-auto w-fit">
                {/* <h1>Visited Countries: {visitedCountries.length}</h1> */}
                <ul>
                    {
                        visitedCountries.map(country =>(
                            <li key={country.cca2} >{country.name.common}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3">
                {
                    countries.map(country => <Country key={country.cca2} handleVisitedCountry={handleVisitedCountry} country={country}/>)
                }
            </div>
        </div>
    );
};

export default Countries;