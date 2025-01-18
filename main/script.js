       // Simulate a logged-in user by setting a variable
let loggedInUser = {
  username: 'John Doe', // Change this name for testing different users
  role: 'jobSeeker' // Change this to 'admin', 'hr', 'volunteer', etc. to simulate different roles
};

// Get elements
const profileLink = document.getElementById('profile-link');
const profileImage = document.getElementById('profile-image');
const profileName = document.getElementById('profile-name');

// Set profile details based on user role
function setProfileDetails(user) {
  if (user.role === 'jobSeeker') {
      profileLink.innerText = 'Job Seeker Profile';
      profileImage.src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/...'; // Replace with actual job seeker image
      profileName.innerText = user.username;
  } else if (user.role === 'hr') {
      profileLink.innerText = 'HR Profile';
      profileImage.src = 'data:image/jpeg;base64,/...'; // Replace with actual HR image
      profileName.innerText = user.username;
  } else if (user.role === 'admin') {
      profileLink.innerText = 'Admin Profile';
      profileImage.src = 'data:image/jpeg;base64,/...'; // Replace with actual admin image
      profileName.innerText = user.username;
  } else if (user.role === 'volunteer') {
      profileLink.innerText = 'Volunteer Profile';
      profileImage.src = 'data:image/jpeg;base64,/...'; // Replace with actual volunteer image
      profileName.innerText = user.username;
  } else {
      profileLink.innerText = 'User Profile';
      profileImage.src = 'data:image/jpeg;base64,/...'; // Replace with default user image
      profileName.innerText = user.username;
  }
}

// Call the function to set profile details
setProfileDetails(loggedInUser);

        // 


          // JavaScript to update the slider value dynamically
    // const slider = document.getElementById('offerSlider');
    // const sliderValue = document.getElementById('sliderValue');

    // slider.addEventListener('input', function () {
    //   sliderValue.textContent = `${slider.value}%`;
    // });



    // 



     // Job Categories with specific job listings, including eligibility for Fresher and Experienced
     const categories = [
        { 
          name: "IT Jobs", 
          jobs: [
            {
              title: "Software Developer",
              description: "Develop software applications for various industries. Work with frontend and backend technologies.",
              qualifications: "Bachelor's in Computer Science, knowledge of Java, Python, or JavaScript.",
              eligibility: "Fresher or Experienced"
            },
            {
              title: "System Administrator",
              description: "Manage and maintain IT infrastructure, including servers, databases, and networks.",
              qualifications: "Degree in IT, experience with networking and server management.",
              eligibility: "Experienced"
            },
            {
              title: "Web Designer",
              description: "Design, develop, and maintain websites using HTML, CSS, JavaScript.",
              qualifications: "Experience in web design and development, knowledge of design tools like Figma.",
              eligibility: "Fresher or Experienced"
            }
          ]
        },
        { 
          name: "Bank Jobs", 
          jobs: [
            {
              title: "Bank Manager",
              description: "Oversee daily operations of the bank branch, manage staff, and ensure customer satisfaction.",
              qualifications: "Bachelor's in Finance, leadership experience in banking.",
              eligibility: "Experienced"
            },
            {
              title: "Loan Officer",
              description: "Process loan applications, evaluate creditworthiness, and guide clients through the loan process.",
              qualifications: "Degree in Finance, experience in loan processing or credit analysis.",
              eligibility: "Fresher or Experienced"
            }
          ]
        },
        { 
          name: "Nurses Jobs", 
          jobs: [
            {
              title: "Registered Nurse",
              description: "Provide care to patients, administer medication, and monitor patient health.",
              qualifications: "RN License, strong communication skills, and attention to detail.",
              eligibility: "Fresher or Experienced"
            },
            {
              title: "Critical Care Nurse",
              description: "Care for patients with severe or life-threatening conditions in ICU or emergency units.",
              qualifications: "RN License, ICU experience, strong decision-making skills.",
              eligibility: "Experienced"
            }
          ]
        },
        { 
          name: "Logistics Jobs", 
          jobs: [
            {
              title: "Supply Chain Manager",
              description: "Oversee and manage the logistics and distribution of products within a supply chain.",
              qualifications: "Degree in Logistics or Supply Chain Management, leadership skills.",
              eligibility: "Experienced"
            },
            {
              title: "Warehouse Supervisor",
              description: "Manage the storage and distribution of products, ensure safety, and optimize processes.",
              qualifications: "Experience in warehouse operations, strong organizational skills.",
              eligibility: "Fresher or Experienced"
            }
          ]
        },
        { 
          name: "Digital Marketing Jobs", 
          jobs: [
            {
              title: "SEO Specialist",
              description: "Optimize website content and structure for search engines to increase visibility.",
              qualifications: "Experience with SEO tools, content marketing, and analytics platforms.",
              eligibility: "Fresher or Experienced"
            },
            {
              title: "Social Media Manager",
              description: "Manage social media accounts, create content, and engage with followers.",
              qualifications: "Experience in social media marketing and content creation.",
              eligibility: "Fresher or Experienced"
            }
          ]
        },
        { 
          name: "Civil Engineering Jobs", 
          jobs: [
            {
              title: "Structural Engineer",
              description: "Design and analyze structures to ensure they are safe, functional, and cost-effective.",
              qualifications: "Bachelor's in Civil Engineering, knowledge of structural design software.",
              eligibility: "Experienced"
            },
            {
              title: "Construction Project Manager",
              description: "Manage construction projects, from initial planning to project completion.",
              qualifications: "Degree in Civil Engineering, project management experience.",
              eligibility: "Experienced"
            }
          ]
        }
      ];
  
      // Load categories dynamically
      function loadCategories() {
        const categoriesContainer = document.querySelector(".categories");
  
        categories.forEach((category) => {
          const card = document.createElement("div");
          card.classList.add("category-card");
          card.textContent = category.name;
  
          // Add click event to open popup
          card.addEventListener("click", () => {
            openPopup(category.name, category.jobs);
          });
  
          categoriesContainer.appendChild(card);
        });
      }
  
      // Open popup with job listings
      function openPopup(title, jobs) {
        const popupDetails = document.getElementById("popup-details");
        let jobListHTML = `<h4>Click 'More' to see all the jobs:</h4>`;
  
        jobs.forEach((job) => {
          jobListHTML += `
            <div class="job-item">
              <h4>${job.title}</h4>
              <p><strong>Description:</strong> ${job.description}</p>
              <p><strong>Qualifications:</strong> ${job.qualifications}</p>
              <p><strong>Eligibility:</strong> ${job.eligibility}</p>
            </div>
          `;
        });
  
        // Adding "More" button to show all jobs
        jobListHTML += `<button class="more-btn" onclick="showAllJobs('${title}')">More</button>`;
        
        document.getElementById("popup-title").textContent = title;
        popupDetails.innerHTML = jobListHTML;
  
        document.getElementById("popup").style.display = "flex";
      }
  
      // Show all jobs when 'More' is clicked
      function showAllJobs(categoryName) {
        alert(`Showing all jobs in the selected category: ${categoryName}`);
        // You can modify this function to dynamically display all jobs, or redirect to another page
      }
  
      // Close popup
      document.querySelector(".close-btn").addEventListener("click", () => {
        document.getElementById("popup").style.display = "none";
      });
  
      // Close popup when clicking outside
      window.addEventListener("click", (e) => {
        if (e.target === document.getElementById("popup")) {
          document.getElementById("popup").style.display = "none";
        }
      });
  
      // Initialize the page
      document.addEventListener("DOMContentLoaded", () => {
        loadCategories(); // Load Job Categories
      });


    // 
//     const testimonialSection = document.querySelector('.testimonial-section'); // Updated class name
// const cards = document.querySelectorAll('.testimonial-card');
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');

// let currentIndex = 0;

// Function to update the slider position
// function updateSlider() {
//   testimonialSection.querySelector('.testimonials').style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// Event Listeners for Buttons
// nextBtn.addEventListener('click', () => {
//   currentIndex = (currentIndex + 1) % cards.length; // Loop back to the start
//   updateSlider();
// });

// prevBtn.addEventListener('click', () => {
//   currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Loop to the end
//   updateSlider();
// });

// Auto-Slide Functionality
// let autoSlide = setInterval(() => {
//   currentIndex = (currentIndex + 1) % cards.length;
//   updateSlider();
// }, 5000); // Change slide every 5 seconds

// Pause Auto-Slide on Button Hover
// [prevBtn, nextBtn].forEach((btn) => {
//   btn.addEventListener('mouseenter', () => clearInterval(autoSlide));
//   btn.addEventListener('mouseleave', () => {
//     autoSlide = setInterval(() => {
//       currentIndex = (currentIndex + 1) % cards.length;
//       updateSlider();
//     }, 5000);
//   });
// });
// 

// hero
const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentIndex = 0;

// Function to update slider
function updateSlider() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
    });

    // Shift the slider
    const offset = currentIndex * -100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

// Next button click event
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
    updateSlider();
});

// Previous button click event
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop back to the last slide
    updateSlider();
});

// Auto-slide functionality (optional)
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}, 5000);



function toggleAnswer(questionElement) {
  const answer = questionElement.nextElementSibling;
  const icon = questionElement.querySelector('.icon');
  
  if (answer.style.maxHeight) {
    answer.style.maxHeight = null;
    icon.textContent = '+';
  } else {
    answer.style.maxHeight = answer.scrollHeight + "px";
    icon.textContent = '-';
  }
}

// testimonials

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

// 

let currentScroll = 0;
  
function scrollPartners(direction) {
  const partnersContainer = document.querySelector('.partners');
  const scrollAmount = 200; // Adjust scroll amount
  partnersContainer.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  });
}
