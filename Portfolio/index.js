// Simple scroll reveal animation
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll("section, .skill-card, .project");
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add("visible");
    }
  });
});

// Add CSS for reveal
const style = document.createElement("style");
style.innerHTML = `
  section, .skill-card, .project { opacity: 0; transform: translateY(40px); transition: all 0.8s ease; }
  section.visible, .skill-card.visible, .project.visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);
