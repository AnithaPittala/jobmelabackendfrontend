document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://localhost:8080/api/chat'; // Backend API endpoint
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const sendChatButton = document.getElementById('sendChat');
    const chatContainer = document.getElementById('chatContainer');
    const openChatButton = document.getElementById('openChatButton');

    // Toggle the chat window visibility
    openChatButton.addEventListener('click', () => {
      if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'flex'; // Show chat window
      } else {
        chatContainer.style.display = 'none'; // Hide chat window
      }
    });

    // Fetch existing chat messages on load
    fetch(apiUrl)
      .then(response => response.json())
      .then(messages => {
        chatMessages.innerHTML = ''; // Clear any existing content
        messages.forEach(msg => appendMessage(msg.sender, msg.message));
      });

    // Send new message to backend
    sendChatButton.addEventListener('click', () => {
      const message = chatInput.value.trim();
      if (message) {
        const chatMessage = { sender: 'User', message: message };

        fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(chatMessage),
        })
          .then(response => response.json())
          .then(updatedMessages => {
            chatMessages.innerHTML = ''; // Clear the chat UI
            updatedMessages.forEach(msg => appendMessage(msg.sender, msg.message));
            chatInput.value = ''; // Clear the input
            chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
          });
      }
    });

    // Function to append a message to the chat
    function appendMessage(sender, message) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');
      messageElement.classList.add(sender === 'User' ? 'user' : 'bot');
      messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
      chatMessages.appendChild(messageElement);
      chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the latest message
    }
  });
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let index = 0;

  function showSlide(newIndex) {
    if (newIndex < 0) {
      index = slides.length - 1;
    } else if (newIndex >= slides.length) {
      index = 0;
    } else {
      index = newIndex;
    }
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  prevButton.addEventListener('click', () => showSlide(index - 1));
  nextButton.addEventListener('click', () => showSlide(index + 1));




  const categories = [
    { 
      name: "IT Jobs", 
      jobs: [
        { title: "Software Developer", description: "Develop software applications for various industries.", qualifications: "Bachelor's in Computer Science.", eligibility: "Fresher or Experienced" },
        { title: "System Administrator", description: "Manage IT infrastructure.", qualifications: "Degree in IT, experience in server management.", eligibility: "Experienced" },
        { title: "Web Designer", description: "Design and maintain websites.", qualifications: "Experience in HTML, CSS, and JavaScript.", eligibility: "Fresher or Experienced" }
      ]
    },
    { 
      name: "Bank Jobs", 
      jobs: [
        { title: "Bank Manager", description: "Oversee daily bank operations.", qualifications: "Bachelor's in Finance.", eligibility: "Experienced" },
        { title: "Loan Officer", description: "Process loan applications.", qualifications: "Degree in Finance.", eligibility: "Fresher or Experienced" }
      ]
    },
    { 
      name: "Nurses Jobs", 
      jobs: [
        { title: "Registered Nurse", description: "Provide patient care and monitor health.", qualifications: "RN License.", eligibility: "Fresher or Experienced" },
        { title: "Critical Care Nurse", description: "Care for ICU patients.", qualifications: "RN License, ICU experience.", eligibility: "Experienced" }
      ]
    },
    { 
      name: "Logistics Jobs", 
      jobs: [
        { title: "Supply Chain Manager", description: "Manage supply chain logistics.", qualifications: "Degree in Logistics.", eligibility: "Experienced" },
        { title: "Warehouse Supervisor", description: "Manage storage and distribution.", qualifications: "Experience in warehouse operations.", eligibility: "Fresher or Experienced" }
      ]
    },
    { 
      name: "Digital Marketing Jobs", 
      jobs: [
        { title: "SEO Specialist", description: "Optimize website content for search engines.", qualifications: "Experience with SEO tools.", eligibility: "Fresher or Experienced" },
        { title: "Social Media Manager", description: "Manage social media accounts.", qualifications: "Experience in social media marketing.", eligibility: "Fresher or Experienced" }
      ]
    },
    { 
      name: "Civil Engineering Jobs", 
      jobs: [
        { title: "Structural Engineer", description: "Design and analyze structures.", qualifications: "Bachelor's in Civil Engineering.", eligibility: "Experienced" },
        { title: "Construction Project Manager", description: "Manage construction projects.", qualifications: "Degree in Civil Engineering.", eligibility: "Experienced" }
      ]
    }
  ];

  // Load categories dynamically
  function loadCategories() {
    const categoriesContainer = document.querySelector(".categories");

    categories.forEach(category => {
      const card = document.createElement("div");
      card.classList.add("category-card");
      card.textContent = category.name;

      // Add click event to open popup
      card.addEventListener("click", () => openPopup(category.name, category.jobs));

      categoriesContainer.appendChild(card);
    });
  }

  // Open popup with job listings
  function openPopup(title, jobs) {
    const popupDetails = document.getElementById("popup-details");
    let jobListHTML = "";

    jobs.forEach(job => {
      jobListHTML += `
        <div class="job-item">
          <h4>${job.title}</h4>
          <p><strong>Description:</strong> ${job.description}</p>
          <p><strong>Qualifications:</strong> ${job.qualifications}</p>
          <p><strong>Eligibility:</strong> ${job.eligibility}</p>
        </div>
      `;
    });

    document.getElementById("popup-title").textContent = title;
    popupDetails.innerHTML = jobListHTML;

    document.getElementById("popup").style.display = "flex";
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
  document.addEventListener("DOMContentLoaded", loadCategories);


  function showContent(type) {
    const contentDiv = document.getElementById('dynamic-content');
    let content = '';

    if (type === 'learn-more') {
      content = `
        <h3>Learn More</h3>
        <p>
          Job Mela is more than just a job fair; it's a gateway to possibilities. 
          Our platform connects job seekers with potential employers, offering a variety of opportunities across industries. 
          We provide workshops, career counseling, and access to a network of professionals to help you navigate your career path with confidence.
        </p>
        <p>
          Whether you're a fresh graduate, an experienced professional, or someone looking to switch careers, 
          Job Mela has something for everyone. Discover your true potential and step into a world of endless opportunities.
        </p>`;
    } else if (type === 'mission') {
      content = `
        <h3>Our Mission</h3>
        <p>
          At Job Mela, our mission is to create a bridge between talent and opportunity. 
          We aim to empower job seekers by connecting them with organizations that value their skills and ambitions. 
          By fostering an environment of inclusivity and growth, we ensure everyone gets a fair chance to achieve their career goals.
        </p>
        <p>
          We are committed to transforming the way employers and job seekers connect by providing a seamless and efficient platform. 
          Our mission extends beyond employment – we strive to build a community where learning, growth, and collaboration thrive.
        </p>`;
    } else if (type === 'vision') {
      content = `
        <h3>Our Vision</h3>
        <p>
          Our vision is to redefine the future of work by creating a world where talent meets opportunity effortlessly. 
          We envision a society where every individual has access to meaningful and fulfilling employment, irrespective of their background or circumstances.
        </p>
        <p>
          By leveraging technology, fostering collaboration, and emphasizing continuous learning, 
          we aim to break down barriers to employment and build a global network of thriving professionals and organizations.
        </p>
        <p>
          Job Mela is dedicated to being a catalyst for change, driving innovation and inclusivity in the job market. 
          Together, we can shape a future where opportunities are abundant, and everyone has the chance to excel.
        </p>`;
    }

    contentDiv.innerHTML = content;
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



// login


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