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

function play(e) {
  console.log(e);
}

window.addEventListener("keydown", playSound);
keys.forEach((key) => {
  // console.log(key);
  key.addEventListener("click", play);
});
// [].forEach.call(cols,function(col){ col.addEventListener("click",click,false); });
