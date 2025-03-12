const bouncer = document.querySelector(".bouncer");
bouncer.addEventListener("animationend", () => {
  bouncer.style.visibility = "hidden";
  document.querySelector(".reveal").classList.add("active");
});

setTimeout(() => {
  const area = document.querySelector(".active");
}, 5000);
