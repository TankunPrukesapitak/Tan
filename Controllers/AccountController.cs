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
                // Email และ Password ตรงกับในฐานข้อมูล
                return Json(new { success = true });
            }
            else
            {
                // Email หรือ Password ไม่ตรงกับในฐานข้อมูล
                return Json(new { success = false, message = "The email or password is incorrect. Please try again." });
            }
        }

        return View("Login", model);
    }

    [HttpPost]
    public async Task<IActionResult> Register(UserModel model)
    {
        // Check if the model is valid
        if (!ModelState.IsValid)
        {
            return View(model);
        }

        // Check if the email is already registered
        if (_context.Users.Any(u => u.Email == model.Email))
        {
            // Email is already registered
            return Json(new { success = false, message = "This email is already registered." });
        }

        // Check if passwords match
        if (model.Password != model.ConfirmPassword)
        {
            // Passwords do not match
            return Json(new { success = false, message = "Passwords do not match." });
        }

        var newUser = new UserModel
        {
            Email = model.Email,
            Password = model.Password,
        };
        _context.Users.Add(newUser);
        await _context.SaveChangesAsync();

        // Registration successful
        return Json(new { success = true, message = "Registration successful! Please log in." });
    }


    // [HttpPost]
    // public async Task<IActionResult> Register(UserModel model)
    // {
    //     if (_context.Users.Any(u => u.Email == model.Email))
    //     {
    //         ModelState.AddModelError("Email", "This email is already registered.");
    //         return View(model);
    //     }

    //     var newUser = new UserModel
    //     {
    //         Email = model.Email,
    //         Password = model.Password,
    //     };

    //     _context.Users.Add(newUser);
    //     await _context.SaveChangesAsync();

    //     return RedirectToAction("Login");
    // }

    
}