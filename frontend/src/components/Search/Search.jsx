import { useState } from 'react';
import axios from 'axios';
import 'aos/dist/aos.css';

function Search() {

  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departingFlights, setDepartingFlights] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:5247/api/v1/Search/search',
        {
          params: {
            departureAirport,
            arrivalAirport,
            departureDate,
            arrivalDate,
          },
        });
      const { value } = response.data;

      const allDeparting = value.responseFlights;
      setDepartingFlights(allDeparting);
    } 
    catch (error) 
    {
      console.error('Failed to fetch flight data:', error);
    }
  };

  return (
    <div className="search section container">
      <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer">
        <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
          <div>
            <label>Departure Airport:</label>
            <input type="text" value={departureAirport} onChange={(e) => setDepartureAirport(e.target.value)} />

            <label>Arrival Airport:</label>
            <input type="text" value={arrivalAirport} onChange={(e) => setArrivalAirport(e.target.value)} />
          </div>
          <div>
            <label>Departure Date:</label>
            <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />

            <label>Arrival Date:</label>
            <input type="date" value={arrivalDate} onChange={(e) => setArrivalDate(e.target.value)} />
          </div>
          <div data-aos='fade-up' data-aos-duration='2000' className="searchInputs flex">
            <button type="submit" className='btn btnBlock flex'>Search Flights</button>
          </div>
        </form>
      </div>
      <div>
        {departingFlights.map(item => {
          return <li>{item.flightNumber}, {item.departAirport}, {item.departDateTime}, {item.arriveAirport}, {item.arriveDateTime}</li>;
        })}
      </div>
    </div>
  )
}

export default Search;
