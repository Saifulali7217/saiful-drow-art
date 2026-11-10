
console.log("SAIFUL_DROW_ART Website Loaded!");

const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", () => {
    console.log("Navigating to:", link.textContent);
  });
});
