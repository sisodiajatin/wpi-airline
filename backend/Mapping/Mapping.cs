using AutoMapper;
using Backend.DTO;
using Backend.Models;

namespace Backend.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Deltas, FlightDTO>();
        }
    }
}