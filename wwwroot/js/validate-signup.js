$(document).ready(function () {
    $('#SignUp').on('click', function (e) {
        e.preventDefault();

        var email = $('#email-sign-up').val();
        var password = $('#password-sign-up').val();
        var confirmPassword = $('#confirmPassword-sign-up').val();

        // ตรวจสอบค่า null และแจ้งเตือนถ้ามีค่า null
        if (!email || !password || !confirmPassword) {
            showPopupSignup("Warning", "Please enter all required information.", "error");
            return;
        }

        $.ajax({
            type: 'POST',
            url: '/Account/Register',
            data: {
                Email: email,
                Password: password,
                ConfirmPassword: confirmPassword
            },
            success: function (result) {
                if (result.success) {
                    // สมัครสำเร็จ
                    
                    // Redirect to login page or perform other actions
                    
                    showSuccessPopupSignup("Success", result.message, "success");
                } else {
                    // แสดง Alert ตามเงื่อนไขที่ไม่ผ่าน
                    showPopupSignup("Warning", result.message, "error");
                }
            }, 
            error: function (result) {
                if (result) {
                    console.log(result);
                    showPopupSignup("Error", "An error occurred during the registration process.", "error");
                } else {
                    console.error("Unexpected error: 'result' is not defined.");
                }
            }
        });
    });

    function showPopupSignup(title, message, icon) {
        swal(title, message, icon);
    }

    function showSuccessPopupSignup(title, message, icon) {
        swal({
            title: title,
            text: message,
            icon: icon,
        }).then(function () {
            // Redirect to login page
            window.location.href = '/Account/Login';
        });
    }
});
