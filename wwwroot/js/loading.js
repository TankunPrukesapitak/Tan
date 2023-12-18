$(document).ready(function () {
    $('#sign-in').click(function () {
      // เมื่อคลิกที่ปุ่ม Sign In
      showLoading(); // แสดง loading
      // ทำสิ่งที่ต้องการหลังจากนี้ (ยกตัวอย่างเท่านั้น)
      setTimeout(function () {
        hideLoading(); // ซ่อน loading หลังจากทำงานเสร็จสิ้น
      }, 1000); // นับถอยหลัง 3 วินาที (เพื่อจำลองการทำงาน)
    });
  
    function showLoading() {
      $('#loading-overlay').fadeIn();
    }
  
    function hideLoading() {
      $('#loading-overlay').fadeOut();
    }
  });
  