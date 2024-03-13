using Microsoft.AspNetCore.Mvc;
using server.models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public static List<User> users = new List<User> {new User("AAA","AAA","AAA@gmail.com","Aa1234",true),
                                                            new User("BBB","BBB","BBB@gmail.com","Bb1234",false),
                                                            new User("CCC","CCC","CCC@gmail.com","Cc1234",true),
                                                            new User("DDD","DDD","DDD@gmail.com","Dd1234",false)
        
    };
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
            var user = users.Find(x => x.Id == id);
            if (user != null)
                return user;
            return null;
        }

        // GET api/<UserController>/5
        [HttpGet("name={name}")]
        public User Get(string name)
        {
            var user = users.Find(x => x.UserName == name);
            if (user != null)
                return user;
            return null;
        }
        // POST api/<UserController>
        [HttpPost]
        public User Post([FromBody] User value)
        {
            var u=users.Find(x => x.UserName == value.UserName);
            if (u != null)
                return null;
            else
            users.Add(new User(value.UserName, value.Address, value.Email, value.Password));
            return value;
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] User value)
        {
            var user = users.Find(x => x.Id == id);
            if (user != null)
            {
                user.Address = value.Address;
                user.Password = value.Password;
                user.UserName = value.UserName;
                user.Email = value.Email;
            }
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var user = users.Find(x => x.Id == id);
            if (user != null) { users.Remove(user); }
        }
    }
}
