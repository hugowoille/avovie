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
		toggleNav[0].style.opacity = "1";

		navLinks.forEach((item) => {
			item.style.animation = "bounce 1.5s ease";
		});
		isHamburgerClicked = true;
	} else {
		trait1.classList.remove("trait1-effect");
		trait2.classList.remove("trait2-effect");
		trait3.classList.remove("trait3-effect");
		toggleNav[0].style.transform = "translateX(400px)";
		toggleNav[0].style.opacity = "0";

		navLinks.forEach((item) => {
			item.style.animation = "none";
		});
		isHamburgerClicked = false;
	}
});

let lastScrollTop = 0;
// This Varibale will store the top position
const navbar = document.getElementById("nav-bar");

window.addEventListener("scroll", function () {
	//on every scroll this funtion will be called

	const scrollTop = window.scrollY;
	console.log("scrollTop:", scrollTop);
	if (scrollTop > lastScrollTop) {
		//if it will be greater than the previous
		navbar.style.transform = "translateY(-70px)";
		//set the value to the negetive of height of navbar
	} else {
		navbar.style.transform = "translateY(0)";
	}

	lastScrollTop = scrollTop; //New Position Stored
	console.log("lastScrollTop:", lastScrollTop);
});
