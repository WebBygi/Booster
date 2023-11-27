gsap.registerPlugin(ScrollTrigger, ScrollSmoother)



var video = document.querySelector(".footer-container__video");
var btn = document.querySelector(".play-pause");

function togglePlayPause() {
	if (video.paused){
		btn.className = "pause";
		video.play();
	} else {
		btn.className = "play";
		video.pause();
	}
}
btn.onclick = function(){
	togglePlayPause();
};

const swiper = new Swiper('.swiper', {
	loop: true,
	pagination: {
	  el: '.swiper-pagination',
	  clickable:true,
	}
 });

// main image
 gsap.fromTo('.img-bg', { opacity:1,y:0}, {
	opacity:0,y:300,
	scrollTrigger: {
		trigger: '.header',
		start: '300',
		scrub: 2,
		effects:true
	}
})
gsap.fromTo('.img-image', { opacity:1,y:0}, {
	opacity:0,y:-500,
	scrollTrigger: {
		trigger: '.header',
		start: '300',
		scrub: 2,
		effects:true
	}
})

// maintext
let maintext = gsap.from(".header-container__block", {
	y:-300,
	duration: 2,
	opacity:0,
	ease: "power1.out",
 });
// delivery

gsap.fromTo('.main-container__delivery', { opacity: 0, x:500 }, {
	opacity: 1,x:0,
	scrollTrigger: {
		trigger: '.main-container',
		start: '-1200',
		end:"-200",
		scrub: true
	}
})
 // massage gun

 gsap.fromTo('.main-container__title', { opacity: 0, x:-500 }, {
	opacity: 0.2,x:0,
	scrollTrigger: {
		trigger: '.main-container',
		start: '-1200',
		scrub: true
	}
})
// limited edition

let tween = gsap.to(".content-image__bg", { y: -430,rotation: 360,duration: 2 }),
  st = ScrollTrigger.create({
    trigger: ".content-image",
    start: "-300",
    end: "+=500",
    animation: tween,
  });



//  smarthit

gsap.fromTo('.smarthit-block__image', { opacity:0,y:500}, {
	opacity:1,y:0,
	scrollTrigger: {
		trigger: '.smarthit-block__image',
		start: '-1000',
		end: "+=500",
		scrub: 2,
	}
})

// include

gsap.fromTo('.include-content', {y:400}, {
	y:0,
	scrollTrigger: {
		trigger: '.include-content',
		start: '-2000',
		end:'top top',
		scrub: 2,
		effects:true
	}
})
// benefits
gsap.fromTo('.benefits', {opacity:0,y:500}, {
	opacity:1,y:0,
	scrollTrigger: {
		trigger: '.benefits',
		start: '-2000',
		end:'top top',
		scrub: 2,
		effects:true
	}
})
// recovery
gsap.fromTo('.recovery-container__image', {opacity:0}, {
	opacity:1,
	scrollTrigger: {
		trigger: '.main-block__recovery',
		start: '-800',
		end:'top',
		scrub: 2,
		effects:true
	}
})

