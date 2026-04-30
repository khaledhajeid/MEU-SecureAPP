using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace SecureBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class TestController : ControllerBase
    {
        [HttpGet("user-data")]
        public IActionResult GetUserData()
        {
            return Ok(new { Message = "Welcome you have a right Token" });
        }

        [Authorize(Roles = "Admin")] 
        [HttpGet("admin-data")]
        public IActionResult GetAdminData()
        {
            return Ok(new { Message = "Welcome Manager this data is secret, so it's only for the admin" });
        }
    }
}