const ghost = document.querySelector(".ghost");
const message = document.querySelector(".message");

const chat = [
  "Hello...",
  "My name is Nora.",
  "You have to find the seaorb which glows in blue.",
  `You shall find it <a href='./seaorb.html'>here</a>`,
];

let currentChatIndex = 0;

ghost.addEventListener("click", () => {
  const isPaused = ghost.style.animationPlayState === "paused";

  ghost.style.animationPlayState = isPaused ? "running" : "paused";
  message.style.visibility = isPaused ? "hidden" : "visible";
  message.innerHTML = chat[currentChatIndex];
});

message.addEventListener("click", () => {
  currentChatIndex = (currentChatIndex + 1) % chat.length;
  message.innerHTML = chat[currentChatIndex];
});
