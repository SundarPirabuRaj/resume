/* ===================== ACCORDION ===================== */
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const isOpen = content.style.display === "block";

    document.querySelectorAll(".accordion-content").forEach(c => {
      c.style.display = "none";
    });

    content.style.display = isOpen ? "none" : "block";
  });
});

/* ===================== EXPERIENCE TOGGLE ===================== */
document.querySelectorAll(".toggle-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const details = btn.nextElementSibling;
    const isOpen = details.style.display === "block";

    details.style.display = isOpen ? "none" : "block";
    btn.textContent = isOpen
      ? "View Responsibilities ▾"
      : "Hide Responsibilities ▴";
  });
});

/* ===================== DARK MODE TOGGLE ===================== */
const themeToggle = document.getElementById("theme-toggle");

// Load saved preference
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.checked = true;
}

// Toggle on change
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});