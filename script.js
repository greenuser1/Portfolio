document.addEventListener("DOMContentLoaded", () => {
  // Create matrix code rain effect
  const matrixContainer = document.getElementById("matrix-container");
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*()!?><[]{}";
  
  for (let i = 0; i < 20; i++) {
    const column = document.createElement("div");
    column.classList.add("matrix-column");
    
    // Random position and speed
    column.style.left = `${Math.random() * 100}%`;
    const speed = Math.random() * 3 + 1;
    column.style.animationDuration = `${speed}s`;
    
    // Create random characters
    let columnText = "";
    for (let j = 0; j < 50; j++) {
      columnText += characters.charAt(Math.floor(Math.random() * characters.length)) + "<br>";
    }
    column.innerHTML = columnText;
    
    matrixContainer.appendChild(column);
  }

  // Create particles for loading animation
  const particlesContainer = document.getElementById("particles");
  for (let i = 0; i < 100; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    
    // Random position
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    particle.style.left = `${x}%`;
    particle.style.top = `${y}%`;
    
    // Random size
    const size = Math.random() * 5 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random color
    const colors = ["#6c63ff", "#ff6b6b", "#4caf50"];
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Random animation delay
    particle.style.animationDelay = `${Math.random() * 2}s`;
    
    // Random direction
    const xMove = (Math.random() - 0.5) * 200;
    const yMove = (Math.random() - 0.5) * 200;
    particle.style.setProperty('--x', `${xMove}px`);
    particle.style.setProperty('--y', `${yMove}px`);
    
    particlesContainer.appendChild(particle);
  }

  // Hide loader after content is loaded
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.querySelector(".loader-container").style.opacity = "0";
      setTimeout(() => {
        document.querySelector(".loader-container").style.display = "none";
      }, 500);
    }, 2000); // Show loader for 2 seconds (shorter as requested)
  });

  // DOM Elements
  const header = document.querySelector("header");
  const skillCategories = document.querySelectorAll(".skill-category");
  const projectCards = document.querySelectorAll(".project-card");
  const filterButtons = document.querySelectorAll(".filter-btn");

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
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Skill category hover effect
  skillCategories.forEach((category) => {
    category.addEventListener("mouseenter", () => {
      category.style.transform = "translateY(-10px)";
      category.style.boxShadow = "0 10px 20px rgba(108, 99, 255, 0.2)";
    });
    category.addEventListener("mouseleave", () => {
      category.style.transform = "translateY(0)";
      category.style.boxShadow = "none";
    });
  });

  // Project filtering functionality - simplified approach
  if (filterButtons.length > 0) {
    // Filter functionality
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        // Simple display/hide approach for better compatibility
        projectCards.forEach(card => {
          if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
            card.style.display = "block";
            setTimeout(() => {
              card.style.opacity = "1";
            }, 10);
          } else {
            card.style.opacity = "0";
            setTimeout(() => {
              card.style.display = "none";
            }, 300);
          }
        });
      });
    });
  }
});