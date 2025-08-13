function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach(item => {
    const submenu = item.querySelector(".submenu");

    submenu.style.maxHeight = "0"; // começa fechado

    item.addEventListener("mouseenter", () => {
      submenu.style.maxHeight = submenu.scrollHeight + "px"; // abre submenu
    });

    item.addEventListener("mouseleave", () => {
      submenu.style.maxHeight = "0"; // fecha submenu
    });
  });
});

function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDark ? "on" : "off");
}

window.addEventListener("DOMContentLoaded", () => {
  const darkModeSetting = localStorage.getItem("darkMode");
  if (darkModeSetting === "on") {
    document.body.classList.add("dark-mode");
  }
});