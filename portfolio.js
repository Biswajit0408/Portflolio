<script>
  // Get all sections and navigation dots
  const sections = document.querySelectorAll("section");
  const dots = document.querySelectorAll(".dot");

  // Event listener for scroll event
  window.addEventListener("scroll", () => {
    let current = ""; // Variable to hold the current section id

    // Loop through each section to find the currently visible one
    sections.forEach(section => {
      const sectionTop = section.offsetTop; // Distance from the top of the page
      const sectionHeight = section.offsetHeight; // Section height

      // Check if the section is in the viewport
      if (pageYOffset >= sectionTop - 100 && pageYOffset < sectionTop + sectionHeight - 100) {
        current = section.getAttribute("id"); // Get the ID of the current section
      }
    });

    // Loop through each dot and add 'active' class to the corresponding dot
    dots.forEach(dot => {
      dot.classList.remove("active"); // Remove active class from all dots
      if (dot.getAttribute("href") === "#" + current) {
        dot.classList.add("active"); // Add active class to the current section's dot
      }
    });
  });
</script>
