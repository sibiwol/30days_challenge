"use strict";

// Get out Element
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");

// Build out Function
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

// Hook up the EventListener
video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
