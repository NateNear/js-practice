// const output = document.querySelector("#output");
// const button = document.querySelector("#set-alarm");

// function setAlarm() {
//   setTimeout(() => {
//     output.textContent = "Wake up!";
//   }, 1000);
// }

// button.addEventListener("click", setAlarm);

// function setAlarm(person, delay) {
//     return new Promise((resolve, reject) => {
//       if (delay < 0) {
//         throw new Error("Alarm delay must not be negative");
//       }
//       setTimeout(() => {
//         resolve(`Wake up, ${person}!`);
//       }, delay);
//     });
//   }


const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");

function setAlarm(person, delay) {
    return new Promise((resolve, reject) => {
      if (delay < 0) {
        throw new Error("Alarm delay must not be negative");
      }
      setTimeout(() => {
        resolve(`Wake up, ${person}!`);
      }, delay);
    });
  
}

button.addEventListener("click",  () => {
    setAlarm(name.value, delay.value)
    .then((message) => {
        output.textContent = message;
    })
    .catch((error) => (output.textContent = `couldn't set alarm ${error}`));
});