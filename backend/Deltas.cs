namespace Backend.Models
{
    public class Deltas
    {
        public string ArriveAirport { get; set; }
        public DateTime ArriveDateTime { get; set; }
        public string DepartAirport { get; set; }
        public DateTime DepartDateTime { get; set; }
        public string FlightNumber { get; set; }
        public int Id { get; set; }
    }
}