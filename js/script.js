// Dynamic greeting
const greeting = document.getElementById("greeting");
if (greeting) {
  const hour = new Date().getHours();
  let greetText = "Hello!";
  if (hour < 12) greetText = "Good morning!";
  else if (hour < 18) greetText = "Good afternoon!";
  else greetText = "Good evening!";
  greeting.innerText = greetText + " Today is " + new Date().toLocaleDateString();
}

// Menu toggle
const toggleBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
if (toggleBtn && nav) {
  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// Form validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}
