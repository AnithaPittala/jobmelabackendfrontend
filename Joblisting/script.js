// JavaScript to toggle sections dynamically
document.querySelectorAll(".menu li a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    // Remove "active" class from all sections
    document.querySelectorAll(".content-section").forEach(section => {
      section.classList.remove("active");
    });

    // Get the target section ID from the data-section attribute
    const targetSection = this.getAttribute("data-section");

    // Add "active" class to the targeted section
    document.getElementById(targetSection).classList.add("active");
  });
});
