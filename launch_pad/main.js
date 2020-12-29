"use strict";

function playSound(e) {
  console.log(e);
  // const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // if (!audio) return; // stop function
  // audio.currentTime = 0;
  // audio.play();
  // key.classList.add("playing");
}

function removeTransitioned(e) {
  console.log(e);
  e.classList.remove("playing");
}

const keys = document.querySelectorAll("launchpad_key");
keys.forEach((key) => {
  key.addEventListener("transitioned", removeTransitioned());
});
window.addEventListener("keydown", playSound());
