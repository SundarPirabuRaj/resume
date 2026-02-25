// Accordion (Experience, Projects, etc.)
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const isOpen = content.style.display === "block";

    document.querySelectorAll(".accordion-content").forEach(c => {
      c.style.display = "none";
    });

    content.style.display = isOpen ? "none" : "block";
  });
});

// Experience card responsibility toggle
const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach(button => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    const isOpen = details.style.display === "block";

    details.style.display = isOpen ? "none" : "block";
    button.textContent = isOpen
      ? "View Responsibilities ▾"
      : "Hide Responsibilities ▴";
  });
});