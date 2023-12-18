using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Tan.Models;

    public class Student
    {
        [Key]
        [DisplayName("รหัสนักเรียน")]
        public int Id { get;set;}

        [Required(ErrorMessage = "แล้วไม่ใส่อะ งง?")]
        [DisplayName("ชื่อนักเรียน")]
        public string? Name { get;set; }

        [DisplayName("คะแนนสอบ")]
        [Range(0,100,ErrorMessage = "มั่วจัดคะแนนมัน 0-100")]
        public int Score { get;set; }
    }

