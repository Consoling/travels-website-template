const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
// const navigationItems = document.querySelector(".nav-items-container");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
  
});






const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");

var currentSlide = 0;

var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");

  currentSlide = manual;
};

function autoSlide() {
  const nextSlideIndex = (currentSlide + 1) % slides.length;
  sliderNav(nextSlideIndex);
}


const autoSlideInterval = setInterval(autoSlide, 8000);

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    clearInterval(autoSlideInterval); 
    sliderNav(i);
  });
});


function toggleContent(contentId) {
  var content = document.getElementById(contentId);
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

// GSAP Animation
gsap.from("#aboutImage", { opacity: 0, duration: 1, x: -50, ease: "power4.out" });

// Optional: You can add more animations or interactions here if needed
