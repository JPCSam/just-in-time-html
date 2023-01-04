try {
	gsap.registerPlugin(ScrollTrigger);
	console.log('Registered GSAP');
} catch (error) {
	console.log(error);
}

ScrollTrigger.create({
	start: 'top -80',
	end: 99999,
	toggleClass: {
		className: 'navbar--scrolled',
		targets: '.navbar',
	},
});
