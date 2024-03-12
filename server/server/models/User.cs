namespace server.models
{
    public class User
    {
        static int index = 0;
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool IsLecturer { get; set; }
        public User(string userName, string address, string email, string password, bool isLecturer=false)
        {
            Id = index++;
            UserName = userName;
            Address = address;
            Email = email;
            Password = password;
            IsLecturer = isLecturer;
        }
        public User()
        {
            
        }
    }
}
