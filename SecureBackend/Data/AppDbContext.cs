using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace SecureBackend.Data
{
    // استخدمنا IdentityDbContext عشان يوفرلنا جداول المستخدمين والصلاحيات جاهزة ومحمية
    public class AppDbContext : IdentityDbContext<IdentityUser>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // هون بنقدر نضيف أي قواعد إضافية أو Input Validation على مستوى الداتا بيس
        }
    }
}