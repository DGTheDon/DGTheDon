function toggleDarkMode() {
  const body = document.querySelector("body");
  const darkModeToggle = document.getElementById("dark-mode-toggle");

  body.classList.toggle("dark");
  darkModeToggle.textContent = body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
}

document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  darkModeToggle.addEventListener("click", toggleDarkMode);
});