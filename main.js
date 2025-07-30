// import "/style-top.css";

// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger.js";
// import { ScrollSmoother } from "gsap/ScrollSmoother.js";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const top = document.querySelector('.top');
const nextSection = document.querySelector('#activity');

window.addEventListener("load", () => {
  const nextSection = document.querySelector('#activity');
  const topSection = document.querySelector('.top');

  gsap.timeline({
    scrollTrigger: {
      trigger: ".top",
      start: "top top",
      end: "bottom top+=250",
      pin: true,
      scrub: 1.2,
      anticipatePin: 1,
      markers: false,
      onLeave: () => {
        nextSection.classList.add("active", "animating");
        gsap.fromTo("#activity",
          {
            opacity: 0,
            scale: 0.2,
            xPercent: -50,
            yPercent: -50,
            left: "50%",
            top: "50%",
            position: "fixed",
            zIndex: 10
          },
          {
            opacity: 1,
            scale: 1,
            xPercent: 0,
            yPercent: 0,
            left: "0%",
            top: "0%",
            duration: 0.8,
            ease: "power3.out",
            onComplete: () => {
              nextSection.classList.remove("animating");
              gsap.set("#activity", {
                position: "relative",
                zIndex: "",
                left: "",
                top: "",
                transform: "none",
                clearProps: "z, scale, opacity, transform, left, top, xPercent, yPercent"
              });
            }
          }
        );
        gsap.set(topSection, { display: "none" });
      },
      onEnterBack: () => {
        nextSection.classList.remove("active");
        nextSection.classList.add("animating");
        gsap.set("#activity", {
          opacity: 0,
          scale: 0.2,
          position: "fixed",
          left: "50%",
          top: "50%",
          xPercent: -50,
          yPercent: -50,
          zIndex: 10,
          transform: "translate(-50%, -50%) scale(0.2)"
        });
        gsap.set(topSection, { display: "block" });
      }
    }
  });

  gsap.to(".top", {
    scrollTrigger: {
      trigger: ".top",
      start: "top top",
      end: "bottom top+=250",
      scrub: 1.2
    },
    opacity: 0,
    scale: 1.1,
    ease: "power3.inOut"
  });
});