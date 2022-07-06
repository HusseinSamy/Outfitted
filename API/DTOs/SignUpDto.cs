using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class SignUpDto
    {
        
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
            public char gender { get; set; }
            
            [Required]
            public string password { get; set; }
    }
}