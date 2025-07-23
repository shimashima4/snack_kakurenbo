// import "/style-top.css";

// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger.js";
// import { ScrollSmoother } from "gsap/ScrollSmoother.js";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const top = document.querySelector('.top__content');
const nextSection = document.querySelector('#activity');

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".top",
        start: "top top",
        end: "bottom top+=100",
        scrub: 1,
        markers: false
      },
      opacity: 0,
      y: -80,
      ease: "power1.inOut"
    })
    .to(top, {
      scale: 2,
      z: 250,
      pin: true,
      transformOrigin: "center center",
      opacity:0,
      ease: "power1.inOut"
    })
    .to(
      nextSection,
      {
        scale: 1.4,
        transformOrigin: "center top",
        opacity: 1,
        ease: "power1.inOut"
      },
      "<"
    );
});