$(document).ready(function () {
    $('#loginForm').submit(function (e) {
        e.preventDefault(); // ป้องกันการ submit แบบปกติ

        $.ajax({
            url: '@Url.Action("Login", "Account")',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                Email: $('#Email').val(),
                Password: $('#Password').val()
            }),
            success: function (result) {
                if (result.success) {
                    // ล็อกอินสำเร็จ, redirect ไปยังหน้าที่กำหนด
                    window.location.href = result.redirectUrl;
                } else {
                    // แสดง error message ในที่นี้ในรูปแบบ alert
                    alert(result.errors.join('\n'));
                }
            },
            error: function () {
                alert('เกิดข้อผิดพลาดในการล็อกอิน');
            }
        });
    });
});