namespace Backend.DTO
{
    public class SearchDTO
    {
        public string ArrivalAirport { get; set; }
        public DateTime ArrivalDateTime { get; set; }
        public string DepartureAirport { get; set; }
        public DateTime DepartureDateTime { get; set; }
        public string FlightNumber { get; set; }
        public int Id { get; set; }
        public DateTime? ArrivalDate { get; set; } = null;
    }
}