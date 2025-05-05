using Backend.DTO;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Interface
{
    public interface IFlightRepository
    {
        Task<ActionResult<SearchResponseDTO>> SearchFlights(SearchDTO flightSearch);
    }
}