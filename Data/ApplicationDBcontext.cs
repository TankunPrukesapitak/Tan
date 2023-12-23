
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration; 
using Tan.Models;


namespace Tan.Data
{
    public class ApplicationDBContext: DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options, IConfiguration configuration) : base(options)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
            }
        }

        public DbSet<Student> Students { get; set; } = null!;
    

        public DbSet<UserModel> Users { get; set; } = null!;
    }
}

