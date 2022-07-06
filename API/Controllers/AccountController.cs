using API.Data;
using API.DTOs;
using API.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Interfaces;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {

        private readonly ApplicationDbContext _context;
        private readonly ITokenService _tokenService;

        public AccountController (ApplicationDbContext context, ITokenService tokenService)
        {
            _context = context;
            _tokenService = tokenService;
        }
        [HttpPost("SignUp")]
        public async Task<ActionResult<User>> SingUp(SignUpDto signUpDto)
        {
            if(await EmailExists(signUpDto.email))
            {
                return BadRequest("Email is already used");
            };

            using var hmac = new HMACSHA512();

            var user = new User {
                first_name = signUpDto.first_name,
                last_name = signUpDto.last_name,
                email = signUpDto.email,
                password_hash = hmac.ComputeHash(Encoding.UTF8.GetBytes(signUpDto.password)),
                password_salt = hmac.Key,
                age = signUpDto.age,
                gender = signUpDto.gender,
                role = 'U'
            };

            _context.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }

        [HttpGet("LogIn/{Email}/{Password}")]
        public async Task<ActionResult<UserDTO>> LogIn(string Email, string Password)
        {
            var user = await _context.user.SingleOrDefaultAsync(x => x.email == Email);

            if (user == null) Unauthorized("no user found");

            var hmac = new HMACSHA512(user.password_salt);

            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(Password));

            for(int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.password_hash[i]) return Unauthorized("invalid password");
            }
            return new UserDTO
            {
                Email = user.email,
                Token = _tokenService.CreateToken(new LogInDTO{Email = Email, Password = Password})
            };
        }

        private async Task<bool> EmailExists (string Email)
        {
            return await _context.user.AnyAsync(x => x.email == Email.ToLower());
        }
        
    }
}