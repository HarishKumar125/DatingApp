using DatingApp.API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;

        public ValuesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetTableValues()
        {
            var temp = await _context.Values.ToListAsync();
            return Ok(temp);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetId(int id)
        {
            var temp = await _context.Values.FirstOrDefaultAsync(x=>x.Id == id);

            return Ok(temp);
        }
    }
}