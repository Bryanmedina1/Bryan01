
const drumSounds = {
  w: "sounds/tom-1.mp3",
  a: "sounds/tom-2.mp3",
  s: "sounds/tom-3.mp3",
  d: "sounds/tom-4.mp3",
  j: "sounds/snare.mp3",
  k: "sounds/crash.mp3",
  l: "sounds/kick-bass.mp3"
};

function playDrum(key) {
  const soundPath = drumSounds[key.toLowerCase()];
  if (!soundPath) return;

  const sound = new Audio(soundPath);
  sound.currentTime = 0;
  sound.play().catch((error) => {
    console.warn("The drum sound could not be played:", error);
  });

  animateButton(key.toLowerCase());
}

function animateButton(key) {
  const button = document.querySelector("." + key);
  if (!button) return;
  button.classList.add("pressed");
  window.setTimeout(() => button.classList.remove("pressed"), 100);
}


document.querySelectorAll(".drum").forEach((button) => {
  button.addEventListener("click", () => playDrum(button.textContent.trim()));
});

document.addEventListener("keydown", (event) => {
  if (event.repeat) return;
  playDrum(event.key);
});
