// Dynamic Event Details
const eventTitle = "Mega Job Mela 2024";
const eventDetails =
  "Nurses Jobs & Work From Home Jobs Available. Spot Offer Letter by 70 Companies!";
const locationText = "Masabtank, Banjara Hills Road, Hyderabad";
const venueText =
  "Khaja Mansion Function Hall, Masabtank, Banjara Hills Road, Hyderabad";

const eventCards = [
  { title: "Date", detail: "26th November 2024, Tuesday" },
  { title: "Time", detail: "8:00 AM - 2:00 PM" },
  { title: "Qualification", detail: "10th/ITI/Diploma/B.Tech/B.Pharm/M.Pharm/Any Graduation" },
  { title: "Criteria", detail: "Fresher/Experienced (Male/Female)" },
];

// Set Welcome Message
document.addEventListener("DOMContentLoaded", () => {
  const welcomeTitle = document.getElementById("welcome-title");
  const welcomeSubtitle = document.getElementById("welcome-subtitle");

  welcomeTitle.textContent = `Welcome to ${eventTitle}`;
  welcomeSubtitle.textContent = eventDetails;

  // Set Location and Venue Text
  document.getElementById("location-text").textContent = locationText;
  document.getElementById("venue-text").textContent = venueText;

  // Event listener for View Details button
  const viewDetailsButton = document.getElementById("view-details-btn");
  viewDetailsButton.addEventListener("click", () => {
    openPopup();
  });
});

// Setup Popup
function openPopup() {
  const popupModal = document.getElementById("popup-modal");
  const closePopup = document.getElementById("close-popup");

  const popupTitle = document.getElementById("popup-title");
  const popupDescription = document.getElementById("popup-description");
  const popupInfo = document.getElementById("popup-info");

  // Populate popup content
  popupTitle.textContent = eventTitle;
  popupDescription.textContent = eventDetails;

  // Populate event card details in popup
  popupInfo.innerHTML = '';  // Clear previous data
  eventCards.forEach((card, index) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("popup-card");

    const cardTitle = document.createElement("h3");
    cardTitle.textContent = card.title;

    const cardDetail = document.createElement("p");
    cardDetail.textContent = card.detail;

    cardDiv.appendChild(cardTitle);
    cardDiv.appendChild(cardDetail);

    popupInfo.appendChild(cardDiv);
  });

  // Show Popup Modal
  popupModal.style.display = "flex";

  // Close Popup
  closePopup.addEventListener("click", () => {
    popupModal.style.display = "none";
  });
}
