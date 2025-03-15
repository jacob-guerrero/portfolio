const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const menuItems = document.querySelectorAll("#menu li");

menuBtn.addEventListener("click", toggleMenu);

menuItems.forEach((item) => {
  item.addEventListener("click", closeMenu);
});

function toggleMenu() {
  if (menu.classList.contains("-right-1/2")) {
    menu.classList.remove("-right-1/2");
    menu.classList.add("right-0");
  } else {
    closeMenu();
  }
}

function closeMenu() {
  menu.classList.remove("right-0");
  menu.classList.add("-right-1/2");
}
