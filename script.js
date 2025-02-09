import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const header = document.querySelector("header");
  const skillCategories = document.querySelectorAll(".skill-category");
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("formStatus");

  // Sticky header
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 100);
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const targetElement = document.querySelector(anchor.getAttribute("href"));
      if (targetElement) {
        gsap.to(window, {
          duration: 1.2,
          scrollTo: { y: targetElement, offsetY: 80 },
          ease: "power3.inOut",
        });
      }
    });
  });

  // GSAP animations
  gsap.utils.toArray("section").forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // Project card animations
  gsap.utils.toArray(".project-card").forEach((card) => {
    gsap.from(card, {
      opacity: 0,
      y: 30,
      duration: 0.5,
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // Skill category hover effect
  skillCategories.forEach((category) => {
    category.addEventListener("mouseenter", () =>
      gsap.to(category, { scale: 1.05, duration: 0.3 })
    );
    category.addEventListener("mouseleave", () =>
      gsap.to(category, { scale: 1, duration: 0.3 })
    );
  });

                });