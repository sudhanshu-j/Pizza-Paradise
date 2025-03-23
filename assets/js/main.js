/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"), // Get the menu element by its ID
  navToggle = document.getElementById("nav-toggle"), // Get the menu toggle button by its ID
  navClose = document.getElementById("nav-close"); // Get the menu close button by its ID

/* Menu show */
if (navToggle) {
  // Check if the navToggle element exists
  navToggle.addEventListener("click", () => {
    // Add an event listener for a click event on the toggle
    navMenu.classList.add("show-menu"); // Add the "show-menu" class to the menu to display it
  });
}

/* Menu hidden */
if (navClose) {
  // Check if the navClose element exists
  navClose.addEventListener("click", () => {
    // Add an event listener for a click event on the close button
    navMenu.classList.remove("show-menu"); // Remove the "show-menu" class to hide the menu
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link"); // Select all elements with the class "nav-link"

/* Function to remove menu on link click */
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu"); // Get the menu element again
  // When a nav-link is clicked, remove the "show-menu" class to hide the menu
  navMenu.classList.remove("show-menu");
};

/* Add the linkAction function to each nav-link */
navLink.forEach((n) => n.addEventListener("click", linkAction)); // Loop over all nav-links and attach the click event

/*=============== ADD SHADOW HEADER ===============*/

// Function to add a shadow to the header when scrolling
const scrollHeader = () => {
  const header = document.getElementById("header"); // Get the header element by its ID
  // If the scroll position is greater than or equal to 50px, add a shadow to the header
  this.scrollY >= 50
    ? header.classList.add("scroll-header") // Add the "scroll-header" class to header
    : header.classList.remove("scroll-header"); // Remove the "scroll-header" class from header
};
window.addEventListener("scroll", scrollHeader); // Listen for the scroll event and call the scrollHeader function

/*=============== SWIPER POPULAR ===============*/
const swiperPopular = new Swiper(".popular-swiper", {
  // Initialize a new Swiper instance for the element with class "popular-swiper"
  loop: true, // Enable looping of the swiper slides
  grabCursor: true, // Show a grab cursor when hovering over the swiper
  slidesPerView: "auto", // Set the number of slides visible at once to auto (depends on container size)
  centeredSlides: "auto", // Center the slides
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]"); // Select all sections with an ID attribute

// Function to highlight the active link when scrolling
const scrollActive = () => {
  const scrollDown = window.scrollY; // Get the current vertical scroll position

  sections.forEach((current) => {
    // Loop through each section
    const sectionHeight = current.offsetHeight, // Get the height of the section
      sectionTop = current.offsetTop - 58, // Get the top position of the section, adjusting for any offset
      sectionId = current.getAttribute("id"), // Get the section's ID attribute
      sectionsClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]" // Find the corresponding link in the menu by matching the section ID
      );

    // Check if the scroll position is within the section's range
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link"); // Add "active-link" class to the link
    } else {
      sectionsClass.classList.remove("active-link"); // Remove "active-link" class from the link
    }
  });
};
window.addEventListener("scroll", scrollActive); // Listen for the scroll event and call the scrollActive function

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up"); // Get the scroll-up button by its ID
  // If the scroll position is greater than or equal to 350px, show the scroll-up button
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll") // Add "show-scroll" class to the scroll-up button
    : scrollUp.classList.remove("show-scroll"); // Remove "show-scroll" class to hide the scroll-up button
};
window.addEventListener("scroll", scrollUp); // Listen for the scroll event and call the scrollUp function

/*=============== SCROLL REVEAL ANIMATION ===============*/

// Initialize the ScrollReveal library with certain options
const sr = ScrollReveal({
  origin: "top", // The animation will start from the top
  distance: "60px", // The elements will travel 60px
  duration: 2500, // The animation duration is 2500ms (2.5 seconds)
  delay: 300, // Delay the animation by 300ms
  reset: true, // Allow the animation to reset and trigger again when scrolling back to the element
});

// Reveal elements with specific classes
sr.reveal(`.home-data`); // Reveal the element with the "home-data" class

sr.reveal(`.home-board`, {
  // Reveal the element with the "home-board" class with a delay and different origin
  delay: 700, // Delay the animation by 700ms
  distance: "100px", // The element will travel 100px
  origin: "right", // The animation will originate from the right
});

sr.reveal(`.home-pizza`, {
  // Reveal the element with the "home-pizza" class with delay, distance, and rotation
  delay: 1400, // Delay the animation by 1400ms
  distance: "100px", // The element will travel 100px
  origin: "bottom", // The animation will originate from the bottom
  rotate: {
    z: -90, // Rotate the element by -90 degrees on the Z-axis
  },
});

sr.reveal(`.home-ingredients`, {
  // Reveal the "home-ingredients" element with a delay and interval
  delay: 2100, // Delay the animation by 2100ms
  interval: 100, // Set a 100ms interval between revealing the elements
});

sr.reveal(`.about-image`, {
  // Reveal the "about-image" element from the left
  origin: "left",
});

sr.reveal(`.about-data`, {
  // Reveal the "about-data" element from the right
  origin: "right",
});

sr.reveal(`.popular-container`); // Reveal the element with the "popular-container" class

sr.reveal(`.recipe-list`, {
  // Reveal the "recipe-list" element from the left
  origin: "left",
});

sr.reveal(`.recipe-img`, {
  // Reveal the "recipe-img" element from the right
  origin: "right",
});

sr.reveal(`.products-card`, {
  // Reveal all the "products-card" elements with an interval between them
  interval: 100,
});

sr.reveal(`.contact-image`, {
  // Reveal the "contact-image" element from the left
  origin: "left",
});

sr.reveal(`.contact-data`, {
  // Reveal the "contact-data" element from the right
  origin: "right",
});

sr.reveal(`.footer`); // Reveal the footer element
