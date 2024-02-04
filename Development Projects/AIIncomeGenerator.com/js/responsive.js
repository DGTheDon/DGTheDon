function initResponsiveDesign() {
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  };

  function updateResponsiveClasses() {
    const screenWidth = window.innerWidth;
    const htmlElement = document.documentElement;

    if (screenWidth >= breakpoints.xl) {
      htmlElement.classList.add("xl");
      htmlElement.classList.remove("lg", "md", "sm");
    } else if (screenWidth >= breakpoints.lg) {
      htmlElement.classList.add("lg");
      htmlElement.classList.remove("xl", "md", "sm");
    } else if (screenWidth >= breakpoints.md) {
      htmlElement.classList.add("md");
      htmlElement.classList.remove("xl", "lg", "sm");
    } else if (screenWidth >= breakpoints.sm) {
      htmlElement.classList.add("sm");
      htmlElement.classList.remove("xl", "lg", "md");
    } else {
      htmlElement.classList.remove("xl", "lg", "md", "sm");
    }
  }

  updateResponsiveClasses();
  window.addEventListener("resize", updateResponsiveClasses);
}

document.addEventListener("DOMContentLoaded", initResponsiveDesign);