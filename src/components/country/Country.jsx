import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry}) => {
    // console.log(country);

    const {name, flags, capital, currencies, area, population} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited)
    };
    return (
        <div className={`country ${visited && 'visited'} w-fit mx-auto my-4`}>
            <h1>{name.common}</h1>
            <img src={flags.png} alt="" className='my-4'/>
            <h3 style={{color: visited? 'purple': 'white'}}>Capital: {capital}</h3>
            {/* <h5>Currencies: {currencies}</h5> */}
            <h6>Area: {area}</h6>
            <h5>Population: {population}</h5>
            <button className='btn mr-2 mb-2' onClick={handleVisited}>{visited? 'Visited':'Going'}</button>
            <button onClick={() => handleVisitedCountry(country)} className='btn'>Mark Visited</button>
            {/* {
                // visited && 'I have visited this country'
                // visited? "I have visited this country" : "I want to visit this country"
            } */}
        </div>
    );
};

export default Country;