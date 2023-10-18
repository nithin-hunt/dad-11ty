gsap.registerPlugin(ScrollTrigger);

const dadText = new SplitType(".dad-title > h1");
const taglineText = new SplitType(".tagline");

var tl1 = gsap.timeline({ repeat: 0, delay: 0.3});
tl1.to(".dad-title .char", { y: 0, stagger: 0.01, duration: 0.5})
.to(".tagline .char", { y: 0, stagger: 0.01})
.to("#svg_1 path", { display: "inline", stagger: 0.03, delay: 0.5,  ease: "sine.in" });

var tl2 = gsap.timeline({ repeat: -1, repeatDelay: 0, delay: 1.5 });
tl2.to(["#svg_2", "#svg_4", "#svg_6", "#svg_8", "#svg_10", "#svg_12", "#svg_14", "#svg_16", "#svg_18", "#svg_20", "#svg_22", "#svg_24", "#svg_26", "#svg_28"], { x: 200, ease: "circ.in" }, 1);
tl2.to(["#svg_3", "#svg_5", "#svg_7", "#svg_9", "#svg_11", "#svg_13", "#svg_15", "#svg_17", "#svg_19", "#svg_21", "#svg_23", "#svg_25", "#svg_27", "#svg_29"], { x: -200, ease: "circ.in" }, 1);
tl2.to(["#svg_2", "#svg_4", "#svg_6", "#svg_8", "#svg_10", "#svg_12", "#svg_14", "#svg_16", "#svg_18", "#svg_20", "#svg_22", "#svg_24", "#svg_26", "#svg_28"], { x: 0, ease: "circ.out" }, 2);
tl2.to(["#svg_3", "#svg_5", "#svg_7", "#svg_9", "#svg_11", "#svg_13", "#svg_15", "#svg_17", "#svg_19", "#svg_21", "#svg_23", "#svg_25", "#svg_27", "#svg_29"], { x: 0, ease: "circ.out" }, 2)

gsap.to('.arrow', { y: 12, ease: "power1.inOut", repeat: -1, yoyo: true, delay: 3});

// let sections = gsap.utils.toArray("section");

// let tops = sections.map(section => ScrollTrigger.create({trigger: section, start: "top top"}));

// sections.forEach((section, i) => {
// ScrollTrigger.create({
//   trigger: section,
//   start: () => section.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
//   pin: true, 
//   pinSpacing: false 
// });
// });

// ScrollTrigger.create({
// snap: {
//   snapTo: (progress, self) => {
//     let sectionStarts = tops.map(st => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
//         snapScroll = gsap.utils.snap(sectionStarts, self.scroll()); // find the closest one
//     return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
//   },
//   duration: 0.5
// }
// });

var tl3 = gsap.timeline({
scrollTrigger: {
  trigger: "#about",
  start: "top 75%",
  end: "center center",
  scrub: true,
  id: "about",
  paused: true
},
});
tl3
.from(".about-title", {
  x: -200,
  duration: 1,
  ease: "sine.out",
})
.fromTo(
  ".about-subtitle",
  {
    opacity: 0,
    duration: 1,
  },
  {
    opacity: 1,
    duration: 2,
  }
)
.fromTo(
  ".about-text",
  {
    opacity: 0,
    duration: 1,
  },
  {
    opacity: 1,
    duration: 2,
  }
)
.from(".ratio", {
  x: 200,
  opacity: 0,
  duration: 3,
  ease: "sine.out",
},
{
  x: 0,
  opacity: 1,
  duration: 3
});

var tl4 = gsap.timeline({
scrollTrigger: {
  trigger: ".section_3",
  start: "top 75%",
  end: "center center",
  scrub: true,
  id: "experience",
},
});
tl4
.from(".experience-title", {
  x: -200,
  duration: 1,
  ease: "sine.out",
})
.fromTo(
  ".experience-subtitle",
  {
    opacity: 0,
    duration: 1,
  },
  {
    opacity: 1,
    duration: 2,
  }
)
.fromTo(
  ".experience-text",
  {
    opacity: 0,
    duration: 1,
  },
  {
    opacity: 1,
    duration: 2,
  }
)
.fromTo(".experience-png", {
  x: 200,
  opacity: 0,
  duration: 3,
  ease: "sine.out",
},
{
  x: 0,
  opacity: 1,
  duration: 3
});