/**
 * ==========================================================================
 * AVINASH - PORTFOLIO JAVASCRIPT (Vanilla JS)
 * Section 18: Editable Information & Client-side Interactions
 * ==========================================================================
 */

// --- EDITABLE PERSONAL INFORMATION ---
export const CONFIG = {
  NAME: "AVINASH",
  COURSE: "B.Tech Computer Science & Engineering (AI/ML)",
  LEVEL: "First-Year Student",
  EMAIL: "p9515avinash@gmail.com",
  GITHUB_URL: "https://github.com/avinashpasuluru9-pixel",
  LINKEDIN_URL: "https://www.linkedin.com/in/avinash-pasuluru-8a1b29431/",
  
  // Projects
  PROJECT_01: {
    title: "Student Grade Calculator",
    technology: "Python",
    repoUrl: null, // "Repository Coming Soon"
  },
  PROJECT_02: {
    title: "Voting Eligibility Calculator",
    technology: "Python",
    repoUrl: null, // "Repository Coming Soon"
  }
};

// --- CLIENT INTERACTIONS ---
document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("hidden");
    });
  }

  // 2. Smooth Scroll for internal navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  // 3. Back to Top Button
  const backToTopBtn = document.getElementById("back-to-top-btn");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
