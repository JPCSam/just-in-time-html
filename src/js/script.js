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

gsap.defaults({ overwrite: 'auto' });

// Set up our scroll trigger
const services_trigger = ScrollTrigger.create({
	trigger: '#services-section',
	start: 'top top',
	end: 'bottom 100%',
	onUpdate: getCurrentSection,
	pin: '.left-content',
});

//Services sections fade-in effect
gsap.utils.toArray('.services-card').forEach((section, i) => {
	gsap.to(section.querySelector('.heading'), {
		opacity: 1,
		scrollTrigger: {
			trigger: '.services-card',
			pinnedContainer: 'main',
			pin: 'main',
			start: 'center center',
			end: '+=300',
			toggleActions: 'play none none reverse',
		},
	});
});
const contentMarkers = gsap.utils.toArray('.contentMarker');

// Handle the updated position
let lastContent;
function getCurrentSection() {
	let newContent;
	const currScroll = scrollY;

	// Find the current section
	contentMarkers.forEach((marker) => {
		if (currScroll > marker.offsetTop) {
			newContent = marker.content;
		}
	});
}

const media = window.matchMedia('screen and (max-width: 667px)');
ScrollTrigger.addEventListener('refreshInit', checkSTState);
checkSTState();

function checkSTState() {
	if (media.matches) {
		services_trigger.disable();
	} else {
		services_trigger.enable();
	}
}
