
document.addEventListener("DOMContentLoaded", () => {
  let currentSection = 0;
  const sections = document.querySelectorAll(".section");
  const totalSections = sections.length;

  function scrollToSection(index) {
    const offset = index * window.innerHeight;
    sections.forEach((section) => {
      section.style.transform = `translateY(-${offset}px)`;
    });
  }

  let isScrolling = false;

  function handleWheel(event) {
    if (isScrolling) return;
    isScrolling = true;
    if (event.deltaY > 0 && currentSection < totalSections - 1) {
      currentSection++;
    } else if (event.deltaY < 0 && currentSection > 0) {
      currentSection--;
    }
    scrollToSection(currentSection);
    setTimeout(() => {
      isScrolling = false;
    }, 800);
  }

  window.addEventListener("wheel", handleWheel);
  scrollToSection(currentSection); // 초기 정렬
});
