using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Tan.Data;
using Tan.Models;


namespace Tan.Controllers;

public class AccountController : Controller
{
    public IActionResult Test()
    {
        return View();
    }

    private readonly ApplicationDBContext _context;


    public AccountController(ApplicationDBContext context)
    {
        _context = context;
    }

    public IActionResult Login()
    {
        return View();
    }

    [HttpPost]
    public async Task<IActionResult> Login(UserModel model)
    {
        if (ModelState.IsValid)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == model.Email && u.Password == model.Password);

            if (user != null)
            {
                return Json(new { success = true });
            }
            else
            {
                return Json(new { success = false, message = "The email or password is incorrect. Please try again." });
            }
        }

        return View("Login", model);
    }

    [HttpPost]
    public async Task<IActionResult> Register(UserModel model)
    {
  
        if (!ModelState.IsValid)
        {
            return View(model);
        }


        if (_context.Users.Any(u => u.Email == model.Email))
        {
        
            return Json(new { success = false, message = "This email is already registered." });
        }


        if (model.Password != model.ConfirmPassword)
        {

            return Json(new { success = false, message = "Passwords do not match." });
        }

        var newUser = new UserModel
        {
            Email = model.Email,
            Password = model.Password,
        };
        _context.Users.Add(newUser);
        await _context.SaveChangesAsync();


        return Json(new { success = true, message = "Registration successful! Please log in." });
    }


}