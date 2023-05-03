using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        
        [Required]
        public string UserName { get; set; }

        public byte[] HashPassword { get; set; }

        public byte[] SaltPassword { get; set; }
    }
}