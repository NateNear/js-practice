const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
    const name = prompt("what is your name");
    button.textContent =   `Player 1: ${name}`;
}