// import "/style.css";

// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger.js";
// import { ScrollSmoother } from "gsap/ScrollSmoother.js";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const top = document.querySelector('.top__pic');
const nextSection = document.querySelector('.activity');

window.addEventListener('load', () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".top",
      start: "top top",
      end: "+=150%",
      scrub: true,
      markers: true
    }
  })
    .to(top, {
      scale: 2,
      z: 250,
      transformOrigin: "center center",
      opacity: 0,
      pointerEvents: "none",
      ease: "power2.out"
    }, 0)
    .to(nextSection, {
      scale: 1.4,
      transformOrigin: "center center",
      opacity: 1,
      pointerEvents: "auto",
      ease: "power2.out"
    },  "<");
});