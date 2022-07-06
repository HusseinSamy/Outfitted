using API.DTOs;
namespace API.Interfaces
{
    public interface ITokenService
    {
        public string CreateToken(LogInDTO user);
    }
}