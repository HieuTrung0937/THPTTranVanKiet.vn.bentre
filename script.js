// Xử lý mở/đóng menu trên điện thoại
const toggle = document.getElementById("menuToggle");
const menu = document.querySelector(".menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}
window.addEventListener("scroll", function () {
  const banner = document.querySelector(".banner");
  if (window.scrollY > 100) {
    banner.classList.add("shrink");
  } else {
    banner.classList.remove("shrink");
  }
});

console.log("Trang web trường đã khởi động!");
