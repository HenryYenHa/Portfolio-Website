/* TODO LIST:
  - All functions to head to separate pages.

*/

function toHomePage() {
  window.location.href = "index.html";
}
function toAboutPage() {
  window.location.href = "/about.html";
}
function toAssembleCVPage() {
  window.location.href = "/assembleCV.html";
}
function toProjectsPage() {
  window.location.href = "/projects.html";
}
function toContactPage() {
  window.location.href = "/contact.html";
}
function toSkillsPage() {
  window.location.href = "/skills.html";
}

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function killNav() {
  const dieNav = document.getElementById("includeNavBar");
  dieNav.innerHTML = "";
}

function resNav() {
  const liveNav = document.getElementById("includeNavBar");
  liveNav.load("navBar.html");
}
