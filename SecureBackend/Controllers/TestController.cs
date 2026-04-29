using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace SecureBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize] // هاي الكلمة معناها: ممنوع الدخول بدون JWT Token صحيح
    public class TestController : ControllerBase
    {
        // أي يوزر مسجل بيقدر يشوف هاد الرابط
        [HttpGet("user-data")]
        public IActionResult GetUserData()
        {
            return Ok(new { Message = "أهلاً بك! أنت تملك Token صحيح." });
        }

        // هاد الرابط محمي جداً: فقط اللي عنده Role اسمها Admin بيقدر يشوفه
        [Authorize(Roles = "Admin")] 
        [HttpGet("admin-data")]
        public IActionResult GetAdminData()
        {
            return Ok(new { Message = "أهلاً بك يا مدير! هاي بيانات سرية للـ Admin فقط." });
        }
    }
}