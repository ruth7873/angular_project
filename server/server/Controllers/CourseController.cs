using Microsoft.AspNetCore.Mvc;
using server.models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        public static List<Course> courses = new List<Course> { new Course("AAA", 1, 10, new DateOnly(), new string[] { "aaa" }, LearningType.FRONTAL, 1, "image.png"),
        new Course("BBB", 2, 20, new DateOnly(), new string[] { "bbb","bbb" }, LearningType.ZOOM, 2, "image2.png")};
        // GET: api/<CourseController>
        [HttpGet]
        public IEnumerable<Course> Get()
        {
            return courses;
        }

        // GET api/<CourseController>/5
        [HttpGet("{id}")]
        public Course Get(int id)
        {
            var course= courses.Find(x=>x.Id==id);
            if(course!=null)
                return course;
            return null;
        }

        // POST api/<CourseController>
        [HttpPost]
        public void Post([FromBody] Course value)
        {
            courses.Add(value);
        }

        // PUT api/<CourseController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Course value)
        {
            var course=courses.Find(x=>x.Id==id);
            if (course != null)
            {
                course.LecturerId = value.LecturerId;
                course.Image=value.Image;
                course.Name=value.Name;
                course.Amount=value.Amount;
                course.BeginDate=value.BeginDate;
                course.CategoryId=value.CategoryId;
                course.LearningType=value.LearningType;
                course.Syllabus=value.Syllabus;
            }

        }

        // DELETE api/<CourseController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var course = courses.Find(x => x.Id == id);
            if (course != null)
            {
                courses.Remove(course);
            }

        }
    }
}
