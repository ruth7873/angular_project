using Microsoft.AspNetCore.Mvc;
using server.models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        public static List<Course> courses = new List<Course> { new Course("photography",0, 10, DateTime.Now, new string[] {"Photography Course Syllabus","Unit 1: Introduction to Photography","History of photography","Basic concepts in photography","Types of cameras and photography equipment","Unit 2: Basic Techniques","Exposure control: aperture, shutter speed, and ISO","Camera position control: framing, composition, and perspective","Motion control: freezing motion and capturing motion blur","Focus control: depth of field","Unit 3: Image Planning","Understanding light and shadow","Color balance control","Creating suitable frames and backgrounds","Leading lines and effective angles","Unit 4: Outdoor Photography","Landscape photography: techniques and dealing with light and shadow","Urban photography: capturing movement and city structure","Nature photography: coping with varying light conditions and movement in nature","Event photography: capturing moments and dealing with changing light conditions","Unit 5: Portrait Photography","Understanding facial and self-anatomy","Light and shadow control for mood and atmosphere","Creating complementary backgrounds and coordinating with the subject","Handling poses and compositions","Unit 6: Product Photography","Creating quality and sales-oriented product images","Coping with product expansion and lighting conditions","Shooting multiple items on a colorful or neutral background","Understanding light sources and controlling angles of illumination","Unit 7: Image Editing","Basics of image editing in professional editing software","Correcting technical flaws in images","Preserving and enhancing details","Creating effects and maintaining style","Unit 8: Guest and Event Photography","Principles of guest photography","Planning and camera placement at events","Coping with changing light conditions and continuous movement","Documenting and editing event videos","Unit 9: Artistic Photography","Creating artistic images using advanced techniques","Preparation and creation in artistic photography","Artistic photography theories and artistic concepts","Reflecting the world through artistic photography","Unit 10: Final Project and Presentation","Independent project creation and presentation","Feedback and critique sessions","Revision and final presentation of projects" }, LearningType.ZOOM, 1, "https://www.photolight.co.il/wp-content/uploads/2020/10/camera_1603811431-300x200.jpg"),
        new Course("BBB", 2, 20, new DateTime(), new string[] { "bbb","bbb" }, LearningType.ZOOM, 2, "\"../images/camera.jpg\"")};
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
