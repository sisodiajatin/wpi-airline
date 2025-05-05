using Microsoft.EntityFrameworkCore;
using Backend.Models;
using Microsoft.Identity.Client;

namespace Backend.DB
{
    public class AirlineDBContext : DbContext
    {
        public DbSet<Deltas> Deltas { get; set; }

        public AirlineDBContext(DbContextOptions<AirlineDBContext> options) : base(options)
        {
        }
    }
}