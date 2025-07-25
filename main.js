// import "/style-top.css";

// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger.js";
// import { ScrollSmoother } from "gsap/ScrollSmoother.js";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

<<<<<<< HEAD
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
=======
window.addEventListener("load", () => {
  // Zoom-in and fade-out .top section from center
  gsap.timeline({
    scrollTrigger: {
      trigger: "#top",
      start: "top top",
      end: "bottom top+=100",
      pin: true,
      scrub: 1.5,
      anticipatePin: 1,
      // markers: true,
    }
  })
  .to(".top", {
    opacity: 0,
    scale: 1.25,
    y: 0,
    ease: "power1.inOut"
  });

  // .activity section zooms in from center and fades in
  gsap.timeline({
    scrollTrigger: {
      trigger: "#activity",
      start: "top center",
      end: "bottom top+=100",
      pin: true,
      scrub: 1.5,
      anticipatePin: 1,
      // markers: true,
    }
  })
  .fromTo(".activity__inner", {
    opacity: 0,
    scale: 0.8,
    y: 0
  }, {
    opacity: 1,
    scale: 1,
    y: 0,
    ease: "power2.inOut"
  });

  // Sticky effect for other sections
  const stickySections = [".about", ".thought", ".member", ".access"];
  stickySections.forEach(selector => {
    gsap.timeline({
      scrollTrigger: {
        trigger: selector,
        start: "top center",
        end: "bottom top+=100",
        pin: true,
        scrub: 1.2,
        anticipatePin: 1,
        // markers: true,
      }
    });
  });
>>>>>>> 48711481479142e100c554ebbc6a8ad1b9d55e78
});