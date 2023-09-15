const hamburger = document.getElementById("hamburger");
const trait1 = document.getElementById("trait1");
const trait2 = document.getElementById("trait2");
const trait3 = document.getElementById("trait3");
let isHamburgerClicked = false;
const navLinksContainer = document.querySelector(".navlinks-container");
console.log("navLinksContainer:", navLinksContainer);
const navLinks = document.querySelectorAll(".nav-links");

hamburger.addEventListener("click", () => {
	if (!isHamburgerClicked) {
		trait1.classList.add("trait1-effect");
		trait2.classList.add("trait2-effect");
		trait3.classList.add("trait3-effect");
		navLinksContainer.style.transform = "translateX(0)";
		navLinksContainer.style.opacity = "1";
		hamburger.setAttribute("aria-expanded", true);
		navLinks.forEach((item) => {
			item.style.animation = "bounce 1.5s ease";
		});
		isHamburgerClicked = true;
	} else {
		trait1.classList.remove("trait1-effect");
		trait2.classList.remove("trait2-effect");
		trait3.classList.remove("trait3-effect");
		navLinksContainer.style.transform = "translateX(400px)";
		navLinksContainer.style.opacity = "0";
		hamburger.setAttribute("aria-expanded", false);
		navLinks.forEach((item) => {
			item.style.animation = "none";
		});
		isHamburgerClicked = false;
	}
});

// Hiding navBar when scrolling

let lastScrollTop = 0;
// This Varibale will store the top position
const navbar = document.getElementById("nav-bar");
window.addEventListener("scroll", function () {
	//on every scroll this funtion will be called
	const scrollTop = window.scrollY;
	if (scrollTop > lastScrollTop) {
		//if it will be greater than the previous
		navbar.style.transform = "translateY(-70px)";
		//set the value to the negetive of height of navbar
	} else {
		navbar.style.transform = "translateY(0)";
	}
	lastScrollTop = scrollTop; //New Position Stored
});

// disable Transition of Navlink container when hiting 767px

/* new ResizeObserver((entries) => {
	if (entries[0].contentRect.width <= 767) {
		navLinksContainer.style.transition = "transform 0.4s, opacity 0.4s";
	} else {
		navLinksContainer.style.transition = "none";
	}
}).observe(document.body); */

new ResizeObserver((entries) => {
	entries[0].contentRect.width <= 767
		? (navLinksContainer.style.transition = "transform 0.4s, opacity 0.4s")
		: (navLinksContainer.style.transition = "none");
}).observe(document.body);
