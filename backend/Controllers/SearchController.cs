using Microsoft.AspNetCore.Mvc;
using Backend.Interface;
using Backend.DTO;

[ApiController]
[Route("api/v1/[controller]")]
public class SearchController : ControllerBase
{
  private readonly IFlightRepository _flightRepository;

  public SearchController(IFlightRepository flightRepository)
  {
    _flightRepository = flightRepository;
  }

  [HttpGet("search")]
  public async Task<ActionResult<SearchResponseDTO>> SearchFlights(
      string departureAirport,
      string arrivalAirport,
      DateTime departureDate,
      DateTime? arrivalDate = null)
  {
    var searchDto = new SearchDTO
    {
      DepartureAirport = departureAirport,
      ArrivalAirport = arrivalAirport,
      DepartureDateTime = departureDate,
      ArrivalDate = arrivalDate,
    };

    var response = await _flightRepository.SearchFlights(searchDto);

    return Ok(response);
  }
}