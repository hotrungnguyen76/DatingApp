using API.Data;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class ApplicationServicesExtension
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection Services, IConfiguration config)
        {
            Services.AddDbContext<DataContext>(opt =>
            {
                opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });
            Services.AddCors();
            Services.AddTransient<IUserRepository, UserRepository>();
            Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
            return Services;
        }


    }
}