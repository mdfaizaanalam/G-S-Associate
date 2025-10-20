
  // Extra video courses data (beyond the first 6 shown in HTML)
const courses = [
  {
    title: "Foundations of Money Management",
    url: "https://www.youtube.com/watch?v=bk-x9LHzl90",
    img: "./assets/images/Mutual-funds.webp",
    aos: "slide-right"
  },
  {
    title: "Corporate Finance Basics",
    url: "https://www.youtube.com/watch?v=SnfDF7fRIaM",
    img: "./assets/images/economic-trend-analysis.webp",
    aos: "zoom-in"
  }
];

let currentIndex = 0;        // tracks how many new courses are shown
let coursesPerClick = 2;     // how many to show on each Load More click

function loadMore() {
  const videoCoursesContainer = document.getElementById("video-courses");

  for (let i = currentIndex; i < currentIndex + coursesPerClick && i < courses.length; i++) {
    const course = courses[i];

    const courseItem = document.createElement("div");
    courseItem.className = "course";
    courseItem.setAttribute("data-aos", course.aos);

    courseItem.innerHTML = `
      <h2>${course.title}</h2>
      <img src="${course.img}" alt="${course.title}" class="poster-image">
      <button onclick="window.open('${course.url}', '_blank')">Watch Now</button>
    `;

    // Insert before the Load More button div
    const loadMoreDiv = videoCoursesContainer.querySelector(".course:last-child");
    videoCoursesContainer.insertBefore(courseItem, loadMoreDiv);
  }

  currentIndex += coursesPerClick;

  // ✅ Remove Load More button when all extra courses are loaded
  if (currentIndex >= courses.length) {
    const loadMoreDiv = videoCoursesContainer.querySelector(".course:last-child");
    loadMoreDiv.remove();
  }
}
