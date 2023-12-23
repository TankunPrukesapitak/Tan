using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Tan.Models;
    public class UserModel
    {
        [Key]
        public string Email { get; set; }
        
        public string Password { get; set; }
        public string? ConfirmPassword { get; set; }
}



