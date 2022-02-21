let menu_toggle = document.querySelector(".bx-grid-alt");
let exit = document.querySelector(".bx-x");
let nav = document.querySelector("#nav");
let scroll_top = document.getElementById("scroll-top");
const sections = document.querySelectorAll("section");
const navli = document.querySelectorAll("nav");

// Show menu

menu_toggle.addEventListener("click", (e) => {
	e.stopPropagation();
	nav.classList.toggle("show-menu");
});

//hide menu
window.addEventListener("click", (e) => {
	if (e.target !== menu_toggle && e.target !== nav) {
		nav.classList.remove("show-menu");
	}
});
window.addEventListener("load", () => {
	document.getElementById("preload").classList.remove("load");
});

// show and hide scroll

window.onscroll = () => {
	if (this.scrollY >= 350) {
		scroll_top.classList.add("show-scroll");
	} else {
		scroll_top.classList.remove("show-scroll");
	}
};

// Scroll to top
scroll_top.addEventListener("click", () => {
	window.scrollTo(0, 0);
});

// Swiper
var swiper = new Swiper(".new-swiper", {
	spaceBetween: 24,
	loop: "true",
	slidesPerView: "auto",
	centeredSlides: true,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
});

// Scroll reveal
const scr = ScrollReveal({
	origin: "top",
	distance: "60px",
	duration: 2500,
	delay: 400,
	// reset: true
});

scr.reveal(`.christmas-img, .new-container, .footer-container`);
scr.reveal(`.home-content`, { delay: 500 });

scr.reveal(`.celebrate-content, .message-content, .footer1-img`, {
	origin: "left",
});
scr.reveal(`.celebrate-img, .message-image, .footer2-img`, { origin: "right" });
scr.reveal(`.giving, .gifts`, { interval: 100 });
