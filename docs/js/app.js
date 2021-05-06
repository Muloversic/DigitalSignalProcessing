//Animated Intro
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".intro__text-says", { y: "0%", duration: 1, stagger: 0.35 });
tl.to(".slider", { y: "-150%", duration: 3, delay: 1.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=2");
tl.fromTo('.header__container', { opacity: 0 }, { opacity: 1, duration: 1 })
tl.fromTo('.signal-text', { opacity: 0 }, { opacity: 1, duration: 0.7 }, "-=1")
tl.fromTo('.signal__down-button', { opacity: 0 }, { opacity: 1, duration: 0.7 }, "-=1")
tl.fromTo('.signal__down-arrow', { opacity: 0 }, { opacity: 1, duration: 0.7 }, "-=1")

//Scroll
function scrollTo(element) {
	window.scroll({
		left: 0,
		top: element.offsetTop,
		behavior: "smooth"
	})
}
const button = document.querySelector('.signal__down-button');
const about = document.querySelector('.about');
const arrow = document.querySelector('.signal__down-arrow');

button.addEventListener('click', () => {
	scrollTo(about);
})
arrow.addEventListener('click', () => {
	scrollTo(about);
})

//Burger menu
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	const menuBody = document.querySelector('.menu__body')
	iconMenu.addEventListener('click', () => {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}

//Animation
const imgBodyClock = document.querySelector('#watch');
const imgBodyCamera = document.querySelector('#camera');
const imgClock = document.querySelector('#watch img');
const imgCamera = document.querySelector('#camera img');

//Animate In
imgBodyClock.addEventListener('mouseenter', (e) => {
	if (window.innerWidth >= 1040) {
		imgBodyClock.style.transition = 'none';
		imgClock.style.transform = 'translateZ(150px) rotateZ(-45deg)';
	}


});
imgBodyCamera.addEventListener('mouseenter', (e) => {
	if (window.innerWidth >= 1040) {
		imgBodyCamera.style.transition = 'none';
		imgCamera.style.transform = 'translateZ(150px) rotateZ(-45deg)';
	}

});
//Animate Out

imgBodyClock.addEventListener('mouseleave', (e) => {
	if (window.innerWidth >= 1040) {
		imgBodyClock.style.transform = `rotateY(0deg) rotateX(0deg)`;
		imgBodyClock.style.transition = 'all 0.5s ease';
		imgClock.style.transition = 'all 0.5s ease';
	}

	//Pop out
	imgClock.style.transform = 'translateZ(0)';

});
imgBodyCamera.addEventListener('mouseleave', (e) => {
	if (window.innerWidth >= 1040) {
		imgBodyCamera.style.transform = `rotateY(0deg) rotateX(0deg)`;
		imgBodyCamera.style.transition = 'all 0.5s ease';
		imgCamera.style.transition = 'all 0.5s ease';

		//Pop out
		imgCamera.style.transform = 'translateZ(0)';
	}
});