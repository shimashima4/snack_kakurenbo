// import "/style-top.css";

// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger.js";
// import { ScrollSmoother } from "gsap/ScrollSmoother.js";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

window.addEventListener("load", () => {
  const topSection = document.querySelector(".top");
  const activitySection = document.querySelector(".activity");
  const remainingSections = document.querySelectorAll(".shop__image, .about, .thought, .member, .access");
  const nav = document.querySelector(".nav");

  // Set initial states
  gsap.set(topSection, {
    opacity: 1,
    scale: 1,
    transformOrigin: "center center"
  });

  // Position activity section at viewport center initially
  gsap.set(activitySection, {
    opacity: 0,
    scale: 0.3,
    position: "fixed",
    top: "50vh",
    left: "50vw",
    xPercent: -50,
    yPercent: -50,
    zIndex: 1000,
    visibility: "hidden",
    transformOrigin: "center center"
  });

  // Hide remaining sections completely
  gsap.set(remainingSections, {
    opacity: 0,
    visibility: "hidden",
    y: 50 // Add slight vertical offset for smooth entrance
  });

  // Create smooth scroll trigger with better timing
  ScrollTrigger.create({
    trigger: topSection,
    start: "top top",
    end: "bottom top",
    pin: true,
    pinSpacing: false,
    scrub: 0.8, // Smoother scrub value
    anticipatePin: 1,

    onUpdate: (self) => {
      const progress = self.progress;

      // Smooth fade out of top section (starts immediately)
      const topOpacity = Math.max(0, 1 - (progress * 1.5));
      const topScale = Math.max(0.7, 1 - (progress * 0.3));

      gsap.to(topSection, {
        opacity: topOpacity,
        scale: topScale,
        duration: 0.3,
        ease: "power2.out"
      });

      // Activity section fade in (starts at 20% progress for overlap)
      if (progress > 0.2) {
        const activityProgress = Math.min(1, (progress - 0.2) / 0.6);
        const activityOpacity = activityProgress;
        const activityScale = 0.3 + (activityProgress * 0.7);

        gsap.set(activitySection, { visibility: "visible" });
        gsap.to(activitySection, {
          opacity: activityOpacity,
          scale: activityScale,
          duration: 0.3,
          ease: "power2.out"
        });
      } else {
        gsap.to(activitySection, {
          opacity: 0,
          duration: 0.2,
          ease: "power2.out"
        });
        gsap.set(activitySection, { visibility: "hidden" });
        // gsap.set(nav, { display: "none" });
      }
    },

    onLeave: () => {
      // Complete the transition smoothly
      gsap.to(topSection, {
        opacity: 0,
        scale: 0.7,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(topSection, { display: "none" });
        }
      });

      // Finalize activity section positioning
      gsap.to(activitySection, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(activitySection, {
            position: "relative",
            top: "auto",
            left: "auto",
            xPercent: 0,
            yPercent: 0,
            transform: "none",
            zIndex: "auto",
            visibility: "visible"
          });

            // gsap.set(nav, { display: "block" });

          // Smooth entrance of remaining sections with stagger
          gsap.to(remainingSections, {
            opacity: 1,
            visibility: "visible",
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            delay: 0.3 // Wait a bit after activity section is positioned
          });

          ScrollTrigger.refresh();
        }
      });
    },

    onEnterBack: () => {
      // Reset for reverse animation
      gsap.set(topSection, {
        display: "block",
        opacity: 0,
        scale: 0.7
      });

      gsap.to(topSection, {
        opacity: 1,
        scale: 1,
        duration: 0,
        ease: "power2.out"
      });

      // Reset activity section to center position
      gsap.set(activitySection, {
        position: "fixed",
        top: "50vh",
        left: "50vw",
        xPercent: -50,
        yPercent: -50,
        zIndex: 1000,
        transformOrigin: "center center"
      });

      gsap.to(activitySection, {
        opacity: 0,
        scale: 0.3,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(activitySection, { visibility: "hidden" });
        }
      });

      // Hide remaining sections immediately
      gsap.set(remainingSections, {
        opacity: 0,
        visibility: "hidden",
        y: 50
      });

      ScrollTrigger.refresh();
    }
  });

  // Additional scroll trigger to ensure smooth activity section positioning
  ScrollTrigger.create({
    trigger: activitySection,
    start: "top center",
    end: "bottom center",
    onEnter: () => {
      // Ensure activity section is properly positioned when it becomes the main content
      if (activitySection.style.position === "relative") {
        gsap.set(activitySection, {
          transformOrigin: "center top"
        });
      }
    }
  });

  // Optimization: Reduce ScrollTrigger refresh frequency
  ScrollTrigger.config({
    limitCallbacks: true,
    syncInterval: 150
  });

  const scrollToHash = () => {
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 1500);
    }
  }
};

scrollToHash();
});