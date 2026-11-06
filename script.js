// IMPORTANT: Replace this with the email address where you want to receive enquiries.
const CONTACT_EMAIL = "YOUR_EMAIL@example.com";

const menuButton = document.querySelector(".menu");
const nav = document.querySelector(".nav");
menuButton?.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(opened));
});
nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lead-form").addEventListener("submit", event => {
  event.preventDefault();
  const help = document.getElementById("form-help");
  if (CONTACT_EMAIL === "YOUR_EMAIL@example.com") {
    help.textContent = "Please add your real email address in script.js before publishing.";
    return;
  }
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent("New portfolio enquiry — " + data.get("service"));
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\n\nProject details:\n${data.get("message")}`
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
