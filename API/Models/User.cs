using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace API.Models
{
    [Index(nameof(email), IsUnique= true)]
        public class User
        {
            [Key]
            public int user_id { get; set; }
            
            [Required(ErrorMessage = "First name is required")]
            [StringLength(maximumLength:100, MinimumLength =3)]
            public string  first_name{ get; set; }

            [Required(ErrorMessage = "Second name is required")]
            [StringLength(maximumLength:100, MinimumLength =3)]
            public string  last_name{ get; set; }
            
            [Required(ErrorMessage = " Age is required")]
            [Range(1,120,ErrorMessage = "Age must be between 1-120")]
            public int age { get; set; }
            
            [EmailAddress(ErrorMessage = "Email is invalid")]
            [Required(ErrorMessage = "Email is required")]
            public string email { get; set; }
            
            [Required(ErrorMessage = "Gender is required")]
            [StringLength(maximumLength:1, MinimumLength =1)]
            public char gender { get; set; }
            
            [Required]
            public byte[] password_hash { get; set; }

            [Required]
            public byte[] password_salt { get; set; }

            [Required(ErrorMessage = "Role is required")]
            [StringLength(maximumLength:1, MinimumLength =1)]
            public char role { get; set; }
        }
}