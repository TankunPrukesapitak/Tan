using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Tan.Models;

namespace Tan.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {


        Student s1 = new Student { Id = 1, Name = "Tankun", Score = 30 };
        Student s2 = new Student { Id = 2, Name = "Home", Score = 100 };
        Student s3 = new Student { Id = 3, Name = "Toomtam", Score = 99 };
        Student s4 = new Student { Id = 4, Name = "Chang", Score = 98 };
        Student s5 = new Student { Id = 5, Name = "Tiw", Score = 101 };

        List<Student> Allstudent = new List<Student> { s1, s2, s3, s4, s5 };
        return View(Allstudent);
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
