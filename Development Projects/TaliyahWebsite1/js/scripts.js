document.addEventListener("DOMContentLoaded", function () {
  initP5Animations();
  addEventListeners();
});

function initP5Animations() {
  // Initialize p5.js animations here
}

function addEventListeners() {
  const ctaButton = document.getElementById("cta-button");
  ctaButton.addEventListener("click", handleCTAClick);

  const readMoreLinks = document.querySelectorAll(".read-more-link");
  readMoreLinks.forEach((link) => {
    link.addEventListener("click", handleReadMoreClick);
  });

  const volunteerForm = document.getElementById("volunteer-form");
  volunteerForm.addEventListener("submit", handleVolunteerFormSubmit);

  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", handleContactFormSubmit);

  const blogPosts = document.querySelectorAll(".blog-post");
  blogPosts.forEach((post) => {
    post.addEventListener("click", handleBlogPostSharing);
  });
}

function handleCTAClick(event) {
  event.preventDefault();
  window.location.href = "about.html";
}

function handleReadMoreClick(event) {
  event.preventDefault();
  const projectId = event.target.dataset.projectId;
  window.location.href = `project_details.html?id=${projectId}`;
}

function handleVolunteerFormSubmit(event) {
  event.preventDefault();
  // Process volunteer form submission here
}

function handleContactFormSubmit(event) {
  event.preventDefault();
  // Process contact form submission here
}

function handleBlogPostSharing(event) {
  event.preventDefault();
  // Share blog post on social media here
}