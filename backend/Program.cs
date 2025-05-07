using Microsoft.EntityFrameworkCore;
using Backend.DB;
using Backend.Interface;
using Backend.Repository;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddAutoMapper(typeof(Backend.Mapping.MappingProfile));
var connectionString = Environment.GetEnvironmentVariable("CONNECTION");
// Ex. connection string: "server=127.0.0.1;port=3306;uid=root;pwd=password;database=flightdata"

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                        policy =>
                        {
                            policy.WithOrigins("http://localhost:5173",
                                                "http://localhost:5247");
                        });
});

builder.Services.AddDbContext<AirlineDBContext>(options=> options.UseMySql(connectionString, new MySqlServerVersion(new Version(8,0,41)))
    .EnableSensitiveDataLogging(true).LogTo(Console.WriteLine, LogLevel.Information).EnableDetailedErrors(true));

builder.Services.AddControllers();
builder.Services.AddScoped<IFlightRepository,FlightRepository>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors(MyAllowSpecificOrigins);

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();
app.MapControllers();
app.Run();
