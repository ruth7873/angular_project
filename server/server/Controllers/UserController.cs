using Microsoft.AspNetCore.Mvc;
using server.models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public static List<User> users = new List<User> { new User("asa", "ass", "dhjkk", "sadfdghj") };
        // GET: api/<UserController>
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return users;
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public User Get(int id)
        {
            var user= users.Find(x => x.Id == id);
            if(user != null) 
                return user;
            return null;
        }

        // POST api/<UserController>
        [HttpPost]
        public void Post([FromBody] User value)
        {
            users.Add(value);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] User value)
        {
            var user=users.Find(x => x.Id == id);
            if(user != null)
            {
                user.Address = value.Address;
                user.Password = value.Password;
                user.UserName = value.UserName;
                user.Email= value.Email;
            }
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var user=users.Find(x=>x.Id == id);
            if(user != null) { users.Remove(user); }
        }
    }
}
