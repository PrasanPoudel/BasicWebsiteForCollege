document.addEventListener("DOMContentLoaded", function () {
  // Navigation toggle for mobile
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    burger.classList.toggle("toggle");
  });

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 100) {
      navbar.style.padding = "10px 5%";
      navbar.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.padding = "15px 5%";
      navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    }
  });

  // Course filtering
  const filterBtns = document.querySelectorAll(".filter-btn");
  const coursesContainer = document.getElementById("coursesContainer");
  const courses = [
    {
      title: "Bachelor of Arts Bachelor of Laws (BALLB)",
      description:
        "A five-year undergraduate program combining studies in arts and law.",
      type: "undergraduate",
    },
    {
      title: "Bachelor of Laws (LLB)",
      description:
        "A three-year undergraduate program focusing on legal studies.",
      type: "undergraduate",
    },
    {
      title: "Bachelor of Business Studies (BBS)",
      description:
        "A four-year program focusing on business management principles and practices.",
      type: "undergraduate",
    },
    {
      title: "Bachelor of Business Administration (BBA)",
      description:
        "A four-year program focusing on business management principles and practices.",
      type: "undergraduate",
    },
    {
      title:
        "Bachelor of Science in Computer Science and Information Technology (BSc CSIT)",
      description:
        "A four-year program covering computer science and information technology.",
      type: "undergraduate",
    },
    {
      title: "Bachelor of Science (BSc) General",
      description:
        "A three-year program offering studies in various science disciplines.",
      type: "undergraduate",
    },
    {
      title: "Bachelor of Education (B.Ed.)",
      description:
        "A program designed to prepare students for careers in education.",
      type: "undergraduate",
    },
    {
      title:
        "Bachelor of Information Communication Technology Education (BICTE)",
      description:
        "A four-year program focusing on information and communication technology in education.",
      type: "undergraduate",
    },
    {
      title: "Master of Business Studies (MBS)",
      description: "A two-year advanced program in business studies.",
      type: "graduate",
    },
    {
      title: "Master of Arts in Nepali (MA Nepali)",
      description:
        "A graduate program focusing on advanced studies in Nepali language and literature.",
      type: "graduate",
    },
    {
      title: "Master of Arts in English (MA English)",
      description:
        "A graduate program focusing on advanced studies in English language and literature.",
      type: "graduate",
    },
    {
      title: "Master of Education (M.Ed.)",
      description:
        "An advanced program designed for educational professionals seeking to deepen their expertise.",
      type: "graduate",
    },
  ];

  // Function to display courses
  function displayCourses(category) {
    coursesContainer.innerHTML = "";

    const filteredCourses =
      category === "all"
        ? courses
        : courses.filter((course) => course.type === category);

    filteredCourses.forEach((course) => {
      const courseCard = document.createElement("div");
      courseCard.className = "course-card";
      courseCard.innerHTML = `
              <div class="course-details">
              <h3>${course.title}</h3>
              <span class="course-type">${
                course.type === "undergraduate" ? "Undergraduate" : "Graduate"
              }</span>
                  <p>${course.description}</p>
                  <a href="#" class="learn-more">Learn More</a>
              </div>
          `;
      coursesContainer.appendChild(courseCard);
    });
  }

  // Display all courses initially
  displayCourses("all");

  // Add click event to filter buttons
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((b) => b.classList.remove("active"));

      // Add active class to clicked button
      btn.classList.add("active");

      // Get filter value
      const filterValue = btn.getAttribute("data-filter");

      // Display filtered courses
      displayCourses(filterValue);
    });
  });

  // Form submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = this.elements.name.value;
      const email = this.elements.email.value;
      const message = this.elements.message.value;

      // Here you would typically send the form data to a server
      // For now, we'll just show an alert
      alert(
        `Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`
      );

      // Reset form
      this.reset();
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Close mobile menu if open
        if (nav.classList.contains("nav-active")) {
          nav.classList.remove("nav-active");
          burger.classList.remove("toggle");
          navLinks.forEach((link) => {
            link.style.animation = "";
          });
        }

        // Scroll to target
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for navbar height
          behavior: "smooth",
        });
      }
    });
  });
});
