function initMicroInteractions() {
  const sections = [
    "home-section",
    "about-section",
    "services-section",
    "blog-section",
    "contact-section",
  ];

  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId);

    section.addEventListener("mouseover", () => {
      section.classList.add("hover:bg-opacity-50");
    });

    section.addEventListener("mouseout", () => {
      section.classList.remove("hover:bg-opacity-50");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMicroInteractions();
});