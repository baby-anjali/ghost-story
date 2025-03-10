const randomNumber = () => Math.ceil(Math.random() * 100);

const orbChat = [
  "You have found me.",
  "This is where the journey ends...",
  `<a href='./ending.html'>so long!</a>`,
];

const generateOrbPosition = () => ({
  startTop: randomNumber(),
  midTop: randomNumber(),
  endTop: randomNumber(),
  startLeft: randomNumber(),
  midLeft: randomNumber(),
  endLeft: randomNumber(),
});

const luckyOrb = randomNumber();

const moveOrbs = (animationName, index) => {
  const orbPosition = generateOrbPosition();
  const glow = index === luckyOrb ? "#00FFFF" : "gold";

  return `
    @keyframes ${animationName}{
        0% {
          top:${orbPosition.startTop}%;
          left:${orbPosition.startLeft}%;
          box-shadow: 0px 0px 0px ${glow};
        }
        10% {
          box-shadow: 0px 0px 20px ${glow};
        }
        25% {
          box-shadow: 0px 0px 0px ${glow};
        }
        30% {
        box-shadow: 0px 0px 20px ${glow};
        }
        50% {
          top:${orbPosition.midTop}%;
          left:${orbPosition.midLeft}%;
          box-shadow: 0px 0px 0px ${glow};
        }
        60% {
        box-shadow: 0px 0px 20px ${glow};
        }
        75% {
          box-shadow: 0px 0px 0px ${glow};
        }
        80% {
          box-shadow: 0px 0px 20px ${glow};
        }
        100% {
          top:${orbPosition.endTop}%;
          left:${orbPosition.endLeft}%;
          box-shadow: 0px 0px 0px ${glow};
        }
    }`;
};
const styleTag = document.createElement("style");
document.head.appendChild(styleTag);

const box = document.querySelector(".orbs-space");
const message = document.querySelector(".message");
const styles = document.querySelector("style");

let chatIndex = 0;

for (let index = 0; index < 100; index++) {
  const orb = document.createElement("div");
  orb.classList.add("orb");

  const animationName = `move${index}`;
  const keyFrames = moveOrbs(animationName, index);

  orb.style.animation = `${animationName} 30s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate`;

  styles.textContent += keyFrames;
  box.appendChild(orb);
}

setTimeout(() => {
  const allOrbs = document.querySelectorAll(".orb");
  allOrbs.forEach((orb, index) => {
    orb.addEventListener("click", function () {
      if (orb.style.animationPlayState === "paused") {
        orb.style.animationPlayState = "running";
      } else {
        orb.style.animationPlayState = "paused";
        message.style.visibility = index === luckyOrb ? "visible" : "hidden";
        message.innerHTML = orbChat[chatIndex];
      }
    });
  });
}, 0);

message.addEventListener("click", () => {
  chatIndex = (chatIndex + 1) % orbChat.length;
  message.innerHTML = orbChat[chatIndex];
});
