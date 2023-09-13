const hamburger = document.getElementById("hamburger");
const trait1 = document.getElementById("trait1");
const trait2 = document.getElementById("trait2");
const trait3 = document.getElementById("trait3");
let isHamburgerClicked = false;
const toggleNav = document.getElementsByClassName("navlinks-container");
const navLinks = document.querySelectorAll(".nav-links");
console.log("navLinks:", navLinks);

hamburger.addEventListener("click", () => {
	if (!isHamburgerClicked) {
		trait1.classList.add("trait1-effect");
		trait2.classList.add("trait2-effect");
		trait3.classList.add("trait3-effect");
		toggleNav[0].style.transform = "translateX(0)";
		navLinks.forEach((item) => {
			item.style.animation = "bounce 1.5s ";
		});
		isHamburgerClicked = true;
	} else {
		trait1.classList.remove("trait1-effect");
		trait2.classList.remove("trait2-effect");
		trait3.classList.remove("trait3-effect");
		toggleNav[0].style.transform = "translateX(400px)";
		navLinks.forEach((item) => {
			item.style.animation = "none";
		});
		isHamburgerClicked = false;
	}
});
