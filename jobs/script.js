document.getElementById('experience').addEventListener('change', function() {
  console.log(`Selected experience: ${this.value}`);
});



// Mock Data: Extended with 9 jobs per category
const jobs = [
    // Recommended Jobs
    { title: "Fresher English Teacher", company: "Global Roots Tech", experience: "0-2 Years", type: "Full-time", location: "Hyderabad, India", tag: "Early Applicant", postedTime: "4 months ago", category: "recommended" },
    { title: "Software Engineer - Fresher", company: "Tech Innovators", experience: "0-1 Years", type: "Full-time", location: "Chennai, India", tag: "Hot Job", postedTime: "2 weeks ago", category: "recommended" },
    { title: "Digital Marketing Specialist", company: "Creative Minds", experience: "1-3 Years", type: "Remote", location: "Bangalore, India", tag: "High Priority", postedTime: "1 month ago", category: "recommended" },
    { title: "Web Developer", company: "Code Solutions Ltd.", experience: "1-2 Years", type: "Full-time", location: "Delhi, India", tag: "Urgent Hiring", postedTime: "2 days ago", category: "recommended" },
    { title: "HR Executive", company: "People Connect", experience: "2-4 Years", type: "Full-time", location: "Mumbai, India", tag: "Popular", postedTime: "1 week ago", category: "recommended" },
    { title: "IT Support Specialist", company: "IT Pro Solutions", experience: "1-3 Years", type: "Contract", location: "Kolkata, India", tag: "Remote Work", postedTime: "1 week ago", category: "recommended" },
    { title: "Data Analyst", company: "Analytica Pvt Ltd", experience: "2-4 Years", type: "Full-time", location: "Pune, India", tag: "Urgent Hiring", postedTime: "3 days ago", category: "recommended" },
    { title: "Business Analyst", company: "Growth Partners", experience: "3-5 Years", type: "Full-time", location: "Delhi, India", tag: "High Demand", postedTime: "2 months ago", category: "recommended" },
    { title: "Content Creator", company: "Viral Media", experience: "1-3 Years", type: "Remote", location: "Anywhere in India", tag: "Trending", postedTime: "2 weeks ago", category: "recommended" },
    { title: "Data Analyst", company: "Analytica Pvt Ltd", experience: "2-4 Years", type: "Full-time", location: "Pune, India", tag: "Urgent Hiring", postedTime: "3 days ago", category: "recommended" },
    { title: "Business Analyst", company: "Growth Partners", experience: "3-5 Years", type: "Full-time", location: "Delhi, India", tag: "High Demand", postedTime: "2 months ago", category: "recommended" },
    { title: "Content Creator", company: "Viral Media", experience: "1-3 Years", type: "Remote", location: "Anywhere in India", tag: "Trending", postedTime: "2 weeks ago", category: "recommended" },
  
    // Applied Jobs
    { title: "Mathematics Teacher", company: "Elite Academy", experience: "2-5 Years", type: "Full-time", location: "Bangalore, India", tag: "Urgent Requirement", postedTime: "1 week ago", category: "applied" },
    { title: "Science Teacher", company: "Bright Minds", experience: "1-3 Years", type: "Part-time", location: "Mumbai, India", tag: "Early Applicant", postedTime: "2 weeks ago", category: "applied" },
    { title: "Content Writer", company: "Blogsy Solutions", experience: "0-1 Years", type: "Remote", location: "Anywhere in India", tag: "Part-time Opportunity", postedTime: "1 week ago", category: "applied" },
    { title: "Technical Support Engineer", company: "SupportPro Pvt Ltd", experience: "0-2 Years", type: "Contract", location: "Hyderabad, India", tag: "Immediate Joining", postedTime: "3 days ago", category: "applied" },
    { title: "Marketing Manager", company: "AdsPro Pvt Ltd", experience: "3-6 Years", type: "Full-time", location: "Chennai, India", tag: "Popular", postedTime: "1 week ago", category: "applied" },
    { title: "Customer Support Executive", company: "HelpDesk Ltd", experience: "1-3 Years", type: "Remote", location: "Anywhere in India", tag: "Hot Job", postedTime: "1 day ago", category: "applied" },
    { title: "Junior Developer", company: "StartUp Tech", experience: "0-2 Years", type: "Full-time", location: "Delhi, India", tag: "Urgent", postedTime: "1 month ago", category: "applied" },
    { title: "Graphic Designer", company: "Creative Vision", experience: "2-4 Years", type: "Full-time", location: "Pune, India", tag: "Hot Job", postedTime: "1 week ago", category: "applied" },
    { title: "Operations Manager", company: "Workflow Ltd", experience: "3-6 Years", type: "Full-time", location: "Mumbai, India", tag: "Trending", postedTime: "5 days ago", category: "applied" },
    { title: "Data Analyst", company: "Analytica Pvt Ltd", experience: "2-4 Years", type: "Full-time", location: "Pune, India", tag: "Urgent Hiring", postedTime: "3 days ago", category: "recommended" },
    { title: "Business Analyst", company: "Growth Partners", experience: "3-5 Years", type: "Full-time", location: "Delhi, India", tag: "High Demand", postedTime: "2 months ago", category: "recommended" },
    { title: "Content Creator", company: "Viral Media", experience: "1-3 Years", type: "Remote", location: "Anywhere in India", tag: "Trending", postedTime: "2 weeks ago", category: "recommended" },
    // Saved Jobs
    { title: "Content Writer", company: "Creative Minds", experience: "1-3 Years", type: "Remote", location: "Delhi, India", tag: "Saved Job", postedTime: "3 weeks ago", category: "saved" },
    { title: "Graphic Designer", company: "Artistic Solutions", experience: "2-4 Years", type: "Full-time", location: "Pune, India", tag: "Saved Job", postedTime: "1 month ago", category: "saved" },
    { title: "Python Developer", company: "Tech Innovations", experience: "1-2 Years", type: "Full-time", location: "Bangalore, India", tag: "Saved Job", postedTime: "2 months ago", category: "saved" },
    { title: "UX/UI Designer", company: "Pixel Perfect", experience: "2-5 Years", type: "Full-time", location: "Mumbai, India", tag: "Saved Job", postedTime: "1 week ago", category: "saved" },
    { title: "SEO Specialist", company: "WebRank Pvt Ltd", experience: "1-3 Years", type: "Remote", location: "Anywhere", tag: "Trending", postedTime: "2 weeks ago", category: "saved" },
    { title: "System Administrator", company: "TechWorks", experience: "3-5 Years", type: "Full-time", location: "Hyderabad, India", tag: "Urgent", postedTime: "1 day ago", category: "saved" },
    { title: "Product Manager", company: "InnoTech Ltd", experience: "5-7 Years", type: "Full-time", location: "Chennai, India", tag: "Saved Job", postedTime: "2 months ago", category: "saved" },
    { title: "Video Editor", company: "MediaPro Studio", experience: "2-3 Years", type: "Remote", location: "Anywhere", tag: "Remote Opportunity", postedTime: "1 month ago", category: "saved" },
    { title: "Front-End Developer", company: "UI Designers Inc", experience: "1-3 Years", type: "Full-time", location: "Delhi, India", tag: "Saved Job", postedTime: "3 days ago", category: "saved" },
  
    // Network Jobs
    { title: "Network Engineer", company: "Network Solutions", experience: "3-5 Years", type: "Full-time", location: "Mumbai, India", tag: "Networking", postedTime: "2 weeks ago", category: "network" },
    { title: "Cloud Architect", company: "SkyNet Pvt Ltd", experience: "5-8 Years", type: "Remote", location: "Bangalore, India", tag: "Trending", postedTime: "1 month ago", category: "network" },
    { title: "System Engineer", company: "IT Core Solutions", experience: "2-4 Years", type: "Full-time", location: "Hyderabad, India", tag: "Networking", postedTime: "3 weeks ago", category: "network" },
    { title: "Cybersecurity Analyst", company: "SecureTech Ltd", experience: "2-3 Years", type: "Full-time", location: "Delhi, India", tag: "Urgent", postedTime: "1 day ago", category: "network" },
    { title: "Database Administrator", company: "DB Masters", experience: "4-6 Years", type: "Full-time", location: "Chennai, India", tag: "Networking", postedTime: "2 days ago", category: "network" },
    { title: "DevOps Engineer", company: "CloudOps Pvt Ltd", experience: "3-5 Years", type: "Remote", location: "Anywhere in India", tag: "High Priority", postedTime: "1 week ago", category: "network" },
    { title: "IT Consultant", company: "Innovative IT Solutions", experience: "5-7 Years", type: "Contract", location: "Delhi, India", tag: "Hot Job", postedTime: "1 month ago", category: "network" },
    { title: "Technical Architect", company: "SystemDesigners", experience: "6-8 Years", type: "Full-time", location: "Bangalore, India", tag: "Top Role", postedTime: "2 months ago", category: "network" },
    { title: "Machine Learning Engineer", company: "AI Core Labs", experience: "2-3 Years", type: "Full-time", location: "Pune, India", tag: "Innovative", postedTime: "2 days ago", category: "network" },
  ];
  
  // Function to Render Jobs
  function renderJobs(category = "recommended") {
    const jobCardsContainer = document.querySelector(".job-cards");
    jobCardsContainer.innerHTML = ""; // Clear existing cards
  
    // Filter Jobs by Category
    const filteredJobs = jobs.filter((job) => job.category === category);
  
    // Check if there are no jobs for the selected category
    if (filteredJobs.length === 0) {
      jobCardsContainer.innerHTML = `<p class="no-jobs">No jobs available in this category.</p>`;
      return;
    }
  
    // Generate Job Cards
    filteredJobs.forEach((job) => {
      const card = `
        <div class="job-card">
          <h3 class="job-title">${job.title}</h3>
          <p class="company">${job.company}</p>
          <p class="details">${job.experience} | ${job.type}</p>
          <p class="location">${job.location}</p>
          <span class="tag">${job.tag}</span>
          <span class="posted-time">${job.postedTime}</span>
        </div>
      `;
      jobCardsContainer.insertAdjacentHTML("beforeend", card);
    });
  }
  
  // Filter Jobs by Tab
  function filterJobs(category) {
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
    document.querySelector(`.tab[onclick="filterJobs('${category}')"]`).classList.add("active");
    renderJobs(category);
  }
  
  // Initial Render
  renderJobs();
  