function toggleBar () {
    const navList = document.querySelector('.nav-links');
    if (navList.style.display === 'flex') {
        navList.style.display = 'none';
    } else {
        navList.style.display = 'flex';
    }
}
console.log(toggleBar);

// courses and review js back to top button

// making the button not to appear at 1st, then appear when scrolling up
let backToTop = document.getElementById("backToTop");
backToTop.style.display = "none";
window.addEventListener("scroll", () => {
  if (this.scrollY > 500) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// smooth animation display back to the top

backToTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
