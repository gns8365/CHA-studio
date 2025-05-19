document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".sections-container");
  const sections = document.querySelectorAll(".section");
  let current = 0;
  let scrolling = false;

  function scrollTo(index) {
    const offset = index * window.innerHeight;
    container.style.transform = `translateY(-${offset}px)`;
  }

  window.addEventListener("wheel", (e) => {
    if (scrolling) return;
    scrolling = true;

    if (e.deltaY > 0 && current < sections.length - 1) {
      current++;
    } else if (e.deltaY < 0 && current > 0) {
      current--;
    }
    scrollTo(current);

    setTimeout(() => {
      scrolling = false;
    }, 1000);
  });

  scrollTo(current);
});
