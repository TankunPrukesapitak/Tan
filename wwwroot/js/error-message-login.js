$(document).ready(function () {
    $('#SignIn').on('click', function (e) {
        e.preventDefault();

        var email = $('#email-sign-in').val();
        var password = $('#password-sign-in').val();

        $.ajax({
            type: 'POST',
            url: '/Account/Login',
            data: {
                Email: email,
                Password: password
            },
            success: function (result) {
                if (result.success) {
                    window.location.href = '/Student/Index';
                } else {
                    // เพิ่มการตรวจสอบ message เพื่อกำหนดค่า default
                    var message = result.message || 'Please enter email and password';
                    console.log(message);

                    // เปลี่ยนจาก alert เป็นการแสดง popup ที่คุณต้องการ
                    showPopup(message);
                }
            },
            error: function () {
                showPopup('An error occurred during the login process.');
            }
        });
    });

    function showPopup(message) {
        // เพิ่มการแสดงค่า message ที่ได้
        console.log(message);

        swal("Warning", message, "error");
    }
});
