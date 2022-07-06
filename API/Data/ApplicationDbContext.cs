using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext
        (DbContextOptions<ApplicationDbContext> options) :
         base(options)
        {
            
        }
        
        public DbSet<User> user { get; set; }
    }
}