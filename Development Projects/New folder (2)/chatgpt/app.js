// Get the featured videos section element
const featuredVideosSection = document.querySelector("main section#featured-videos ul");

// Fetch the JSON data
fetch("featured-videos.json")
  .then(response => response.text())
  .then(data => {
    const jsonData = JSON.parse(data);
    jsonData.featuredVideos.forEach(video => {
      // Create the video element
      const videoElement = document.createElement("li");
      videoElement.innerHTML = `
        <h4>${video.title}</h4>
        <video src="${video.url}" controls></video>
      `;
      // Append the video element to the featured videos section
      featuredVideosSection.appendChild(videoElement);
    });
  });
