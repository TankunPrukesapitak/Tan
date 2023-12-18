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
                return RedirectToAction("Index", "Student");
            }
            else
            {
                // Email หรือ Password ไม่ตรงกับในฐานข้อมูล
                ModelState.AddModelError(string.Empty, "อีเมลหรือรหัสผ่านไม่ถูกต้อง");
                return View("Login", model);
            }
        }

        return View("Login", model);
    }


    [HttpPost]
    public async Task<IActionResult> Register(UserModel model)
    {
        if (_context.Users.Any(u => u.Email == model.Email))
        {
            ModelState.AddModelError("Email", "This email is already registered.");
            return View(model);
        }

        var newUser = new UserModel
        {
            Email = model.Email,
            Password = model.Password,
        };

        _context.Users.Add(newUser);
        await _context.SaveChangesAsync();

        return RedirectToAction("Login");
    }

    
}