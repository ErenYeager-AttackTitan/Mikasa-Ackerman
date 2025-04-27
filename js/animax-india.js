// Function to convert the epoch time to IST (Indian Standard Time)
function convertEpochToIST(epochTime) {
  const date = new Date(epochTime);
  return date.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
}

// Function to fetch and display EPG data in a given container
async function displayEPG(containerId, channelId = 2258) {
  const url = `https://jiotv.data.cdn.jio.com/apis/v1.3/getepg/get?offset=0&channel_id=${channelId}`;
  const response = await fetch(url);
  const data = await response.json();
  const shows = data.epg;
  const currentTime = Date.now(); // Current time in milliseconds

  const container = document.getElementById(containerId);
  container.innerHTML = ''; // Clear container before populating new data

  let currentlyAiringCard = null;

  // Loop through the shows and classify them
  shows.forEach(show => {
    const startTime = new Date(show.startEpoch);
    const endTime = new Date(show.endEpoch);
    const showStartTimeIST = convertEpochToIST(show.startEpoch);
    const showEndTimeIST = convertEpochToIST(show.endEpoch);

    const isCurrentlyAiring = currentTime >= startTime && currentTime <= endTime;

    // Create the card for each show
    const card = document.createElement("div");
    card.classList.add("card");

    // Apply the "currently airing" class if the show is currently airing
    if (isCurrentlyAiring) {
      card.classList.add("currently-airing");
      currentlyAiringCard = card; // Store the currently airing card for later use
    }

    card.innerHTML = `
      <div>
        <div class="show-name">${show.showname}</div>
        <div class="show-description">${show.description}</div>
        <div class="show-time">Time: ${showStartTimeIST} - ${showEndTimeIST}</div>
        <div class="show-time">Channel: ${show.channel_name}</div>
      </div>
    `;

    // Append the card to the container
    container.appendChild(card);
  });

  // If we have a currently airing show, change the card in real-time
  if (currentlyAiringCard) {
    updateCurrentlyAiringCard(currentlyAiringCard);
  }
}

// Function to update the currently airing card without refreshing the entire page
function updateCurrentlyAiringCard(card) {
  // Make sure we have the currently airing card
  const allCards = document.querySelectorAll(".card");
  allCards.forEach(c => c.classList.remove("currently-airing"));
  card.classList.add("currently-airing");
}

// Initial load of the EPG data
displayEPG('epg-container');

// Fetch new data every 5 seconds
setInterval(() => {
  displayEPG('epg-container');
}, 5000);
      
