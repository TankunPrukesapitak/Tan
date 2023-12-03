using Microsoft.AspNetCore.Mvc;


namespace Tan.Controllers;

public class AccountController : Controller
{
    public IActionResult Login()
    {
        return View();
    }

    // public IActionResult Signup()
    // {
    //     return View();
    // }



}