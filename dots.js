"use strict";

const dots = document.querySelectorAll(".dot");
const dotsContainer = document.querySelector(".dots");
const sections = document.querySelectorAll(".section");
const slides = document.querySelector(".slides-wrapper");

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
};

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const sectionId = dot.getAttribute("data-section");
    scrollToSection(sectionId);
  });
});

const handleDotsVisibility = (entries) => {
  entries.forEach((entry) => {
    if (entry.target === slides && entry.isIntersecting) {
      dotsContainer.classList.add("visible");
    } else {
      dotsContainer.classList.remove("visible");
    }
  });
};

const intersectionObserver1 = new IntersectionObserver(handleDotsVisibility, {
  threshold: 0.1,
});

intersectionObserver1.observe(slides);

const handleActiveDots = (entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.getAttribute("id");
    const dot = document.querySelector(`[data-section="${sectionId}"]`);

    if (entry.isIntersecting) {
      replaceData({ ...COMMON, data: DATA[entry.target.id] });
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
};

const intersectionObserver2 = new IntersectionObserver(handleActiveDots, {
  threshold: 0.5,
});

sections.forEach((section) => intersectionObserver2.observe(section));

// $(".smooth").on("wheel", function (e) {
//   const delta = e.originalEvent.deltaY;

//   if (delta > 0 && this.nextElementSibling) {
//     const nextSibling = this.nextElementSibling;
//     nextSibling.scrollIntoView({ behavior: "smooth", block: "start" });
//   } else if (delta < 0 && this.previousElementSibling) {
//     const prevSibling = this.previousElementSibling;
//     prevSibling.scrollIntoView({ behavior: "smooth", block: "end" });
//   }
//   e.preventDefault();
// });

// $(".smooth").on("mousewheel DOMMouseScroll", function (e) {
//   const delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;

//   if (delta > 0 && this.previousElementSibling) {
//     this.previousElementSibling.scrollIntoView({ behavior: "smooth" });
//   } else if (delta < 0 && this.nextElementSibling) {
//     this.nextElementSibling.scrollIntoView({ behavior: "smooth" });
//   }
//   e.preventDefault();
// });
