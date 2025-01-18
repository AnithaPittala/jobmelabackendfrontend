
  let currentTestimonial = 0;

  function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach((testimonial, i) => {
      testimonial.style.display = i === index ? 'block' : 'none';
    });
  }

  function nextTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }

  function previousTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial');
    currentTestimonial =
      (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
  }

  document.addEventListener('DOMContentLoaded', () => {
    showTestimonial(0);

    setInterval(nextTestimonial, 5000); // Auto-change every 5 seconds
  });

