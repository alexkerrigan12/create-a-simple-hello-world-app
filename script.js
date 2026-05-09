const button = document.querySelector("#greetButton");
const status = document.querySelector("#status");

button.addEventListener("click", () => {
  status.textContent = "Hello right back at you.";
});
