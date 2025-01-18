   // Simulate a logged-in user by setting a variable
   let loggedInUser = {
    username: 'John Doe', // You can change this name for testing different users
    role: 'jobSeeker' // Change this to 'admin', 'hr', 'volunteer', etc. to simulate different roles
};

// Get elements
const profileLink = document.getElementById('profile-link');
const profileImage = document.getElementById('profile-image');

// Set profile details based on user role
function setProfileDetails(user) {
    if (user.role === 'jobSeeker') {
        profileLink.innerText = 'Job Seeker Profile';
        profileImage.src = 'jobseeker-image.jpg';  // Replace with actual job seeker image path
    } else if (user.role === 'hr') {
        profileLink.innerText = 'HR Profile';
        profileImage.src = 'hr-image.jpg';  // Replace with actual HR image path
    } else if (user.role === 'admin') {
        profileLink.innerText = 'Admin Profile';
        profileImage.src = 'admin-image.jpg';  // Replace with actual Admin image path
    } else if (user.role === 'volunteer') {
        profileLink.innerText = 'Volunteer Profile';
        profileImage.src = 'volunteer-image.jpg';  // Replace with actual Volunteer image path
    }
}

// Call the function to update profile info based on logged-in user
setProfileDetails(loggedInUser);


// 



function filterJobs() {
    let searchInput = document.getElementById('search-input').value.toLowerCase();
    let skillFilter = document.getElementById('skill-filter').value;
    let locationFilter = document.getElementById('location-filter').value;
    let jobCards = document.querySelectorAll('.freelance-card');

    jobCards.forEach(card => {
        let jobTitle = card.querySelector('.card-header h3').textContent.toLowerCase();
        let jobDescription = card.querySelector('.card-body p').textContent.toLowerCase();
        let jobSkills = card.getAttribute('data-skills');
        let jobLocation = card.getAttribute('data-location');

        // Filter logic
        if (
            (jobTitle.includes(searchInput) || jobDescription.includes(searchInput)) &&
            (skillFilter === "" || jobSkills === skillFilter) &&
            (locationFilter === "" || jobLocation === locationFilter)
        ) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
