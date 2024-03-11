namespace server.models
{
    public enum LearningType { FRONTAL = 1, Digital = 2 };
    public class Course
    {
        static int index = 0;
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }          
        public int CategoryId { get; set; }
        public int Amount { get; set; }
        public string BeginDate { get; set; }
        public string[] Syllabus { get; set; }
        public LearningType LearningType { get; set; }
        public int LecturerId { get; set; }
        public string Image { get; set; }
        public Course(string name,string description,int catId,int amount,string beginDate, string[]syllabus,LearningType learningType,int lecturerId,string image)
        {
            Id = index++;
            Name = name;
            Description = description;
            CategoryId = catId;
            Amount = amount;
            BeginDate = beginDate;
            Syllabus = syllabus;
            LearningType = learningType;
            LecturerId=lecturerId;
            Image = image;   
        }
        public Course()
        {
            
        }
    }
}
