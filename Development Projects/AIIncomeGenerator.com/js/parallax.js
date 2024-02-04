function initParallaxScrolling() {
  const parallaxElements = document.querySelectorAll("[data-parallax]");

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    parallaxElements.forEach((element) => {
      const parallaxSpeed = parseFloat(element.getAttribute("data-parallax"));
      const elementOffsetTop = element.offsetTop;
      const elementHeight = element.offsetHeight;

      if (scrollTop + window.innerHeight > elementOffsetTop && scrollTop < elementOffsetTop + elementHeight) {
        const parallaxOffset = (scrollTop - elementOffsetTop) * parallaxSpeed;
        element.style.transform = `translateY(${parallaxOffset}px)`;
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", initParallaxScrolling);