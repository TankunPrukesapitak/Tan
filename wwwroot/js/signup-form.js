// เรียกใช้งาน popup
var popup = document.getElementById("signup-form-popup");

// เรียกใช้ปุ่ม Sign Up
var signUpButton = document.getElementById("sign-up");

// เรียกใช้ปุ่มปิด popup
var closeBtn = document.getElementById("close-btn");

// เมื่อคลิกที่ปุ่ม Sign Up
signUpButton.onclick = function() {
    popup.style.display = "block";
}

// เมื่อคลิกที่ปุ่มปิด popup
closeBtn.onclick = function() {
    popup.style.display = "none";
}

// เมื่อคลิกที่พื้นหลังของ popup (นอกปุ่ม Sign Up)
window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
}
