using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using Backend.DB;
using Backend.DTO;
using Backend.Interface;

namespace Backend.Repository
{
    public class FlightRepository : IFlightRepository
    {
        private readonly AirlineDBContext _context;
        private readonly IMapper _mapper;

        public FlightRepository(AirlineDBContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ActionResult<SearchResponseDTO>> SearchFlights(SearchDTO search)
        {
            var flights = await _context.Deltas.Where(f => f.DepartAirport.Contains(search.DepartureAirport)
                                            && f.DepartDateTime.Date == search.DepartureDateTime.Date
                                            && f.ArriveAirport.Contains(search.ArrivalAirport)
                                            && f.ArriveDateTime.Date == search.ArrivalDate).ToListAsync();
            var mappedFlights = _mapper.Map<IEnumerable<FlightDTO>>(flights);

            var response = new SearchResponseDTO
            {
                ResponseFlights = mappedFlights
            };

            return response;
        }
    }
}