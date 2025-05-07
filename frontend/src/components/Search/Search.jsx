import { useState } from 'react';
import axios, { all } from 'axios';
import 'aos/dist/aos.css';

function Search() {
  const [departureAirport, setDepartAirport] = useState("");
  const [arrivalAirport, setArriveAirport] = useState("");
  const [departureDate, setDepartDateTime] = useState("");
  const [arrivalDate, setArriveDateTime] = useState("");
  const [flights, setFlights] = useState([]);

  const [departingFlight, setDepartingFlight] = useState();
  const [arrivingFlight, setArrivingFlight] = useState();
  const [searched, setSearch] = useState();

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
      console.log(allDeparting[0]);
      setFlights(allDeparting);
      setSearch(true);
    }
    catch (error) {
      console.error('Failed to fetch flight data:', error);
    }
  };

  const setFlight = (flight) => {
    if (departingFlight == null) {
      setDepartingFlight(flight);
      console.log(flight);
    }
    else if (arrivingFlight == null) {
      setArrivingFlight(flight);
      console.log(flight);
    }
    else {
      console.log("Didn't set flight...");
    }
  };

  return (
    <div className="search section container">
      <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer">
        <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
          <div>
            <li>
              <label>Departure Airport:</label>
              <input type="text" value={departureAirport} onChange={(e) => setDepartAirport(e.target.value)} />
            </li>
            <li>
              <label>Departure Date:</label>
              <input type="date" value={departureDate} onChange={(e) => setDepartDateTime(e.target.value)} />
            </li>
            <li>
              <label>Arrival Airport:</label>
              <input type="text" value={arrivalAirport} onChange={(e) => setArriveAirport(e.target.value)} />
            </li>
            <li>
              <label>Arrival Date:</label>
              <input type="date" value={arrivalDate} onChange={(e) => setArriveDateTime(e.target.value)} />
            </li>
          </div>
          <div data-aos='fade-up' data-aos-duration='2000' className="searchInputs flex">
            <button type="submit" className='btn btnBlock flex'>Search Flights</button>
          </div>
        </form>
      </div>
      <div>
        <br></br>
        <li>
          {(departingFlight) &&
            <li>
              <li>
                Selected departing flight:
              </li>
              <li>
                Flight Num: {departingFlight.flightNumber}
              </li>
              <li>
                Departure Airport: {departingFlight.departAirport}
              </li>
              <li>
                Departure Date/Time: {departingFlight.departDateTime}
              </li>
              <li>
                Arrival Airport: {departingFlight.arriveAirport}
              </li>
              <li>
                Arrival Date/Time:{departingFlight.arriveDateTime}
              </li>
              <br></br>
            </li>}
            {(arrivingFlight) &&
            <li>
              <li>
                Selected arriving flight:
              </li>
              <li>
                Flight Num: {arrivingFlight.flightNumber}
              </li>
              <li>
                Departure Airport: {arrivingFlight.departAirport}
              </li>
              <li>
                Departure Date/Time: {arrivingFlight.departDateTime}
              </li>
              <li>
                Arrival Airport: {arrivingFlight.arriveAirport}
              </li>
              <li>
                Arrival Date/Time:{arrivingFlight.arriveDateTime}
              </li>
            </li>}
          {(searched) && (!departingFlight) && ("Select departing flight:")}
          {(searched) && (departingFlight) && (!arrivingFlight) && ("Select arriving flight:")}
        </li>
        <br></br>
        <ul>
          {((!departingFlight) || (!arrivingFlight)) && flights.map((item, i) => (
            <li key={i}>
              <li>Flight Num: {item.flightNumber}</li>
              <li>Departure Airport: {item.departAirport}</li>
              <li>Departure Date: {new Date(item.departDateTime || "").toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric' })}</li>
              <li>Departure Time: {new Date(item.departDateTime || "").toLocaleString([], { hour: '2-digit', minute: '2-digit' })}</li>
              <li>Arrival Airport: {item.arriveAirport}</li>
              <li>Arrival Date: {new Date(item.arriveDateTime || "").toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric' })}</li>
              <li>Arrival Time: {new Date(item.arriveDateTime || "").toLocaleString([], { hour: '2-digit', minute: '2-digit' })}</li>
              <button style={{ marginLeft: "auto" }} className='btn btnBlock flex' onClick={() => setFlight?.(item)}>Select Flight</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Search;
