#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TOIStest.Models;

namespace TOIStest.Data
{
    public class TOIStestContext : DbContext
    {
        public TOIStestContext (DbContextOptions<TOIStestContext> options)
            : base(options)
        {
        }

        public DbSet<TOIStest.Models.Vorm_1> Vorm_1 { get; set; }
    }
}
