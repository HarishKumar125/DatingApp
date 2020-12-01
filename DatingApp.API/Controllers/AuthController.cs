using System.Threading.Tasks;
using DatingApp.API.Dtos;
using DatingApp.API.Interfaces;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        public AuthController(IAuthRepository repo)
        {
            _repo = repo;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegister userDto)
        {
            //validate request
            userDto.Username = userDto.Username.ToLower();

            if(await _repo.UserExists(userDto.Username))
               return BadRequest("Username alreaady exits");
            
            var user = new User{
                Username = userDto.Username
            };

            var createdUser = await _repo.Register(user, userDto.Password);

            return StatusCode(201);
        }
    }
}