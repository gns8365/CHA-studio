
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  let current = 0;

  function scrollTo(index) {
    const offset = index * window.innerHeight;
    sections.forEach(section => {
      section.style.transform = `translateY(-${offset}px)`;
    });
  }

  window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0 && current < sections.length - 1) {
      current++;
    } else if (e.deltaY < 0 && current > 0) {
      current--;
    }
    scrollTo(current);
  });

  scrollTo(current);
});
