"use strict";

const keys = document.querySelectorAll(".key");

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");

  audio.addEventListener("ended", () => {
    key.classList.remove("playing");
  });
}

function showModal() {
  const modal = document.querySelector(".modal");
  modal.style.visibility = "visible";

  modal.addEventListener("click", () => {
    modal.style.visibility = "hidden";
  });
}

window.addEventListener("load", showModal);
window.addEventListener("keydown", playSound);
keys.forEach((key) => {
  key.addEventListener("click", () => {
    console.log(key);
  });
});
// [].forEach.call(cols,function(col){ col.addEventListener("click",click,false); });
