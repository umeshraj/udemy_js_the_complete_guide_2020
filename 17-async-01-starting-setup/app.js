const button = document.querySelector("button");
const output = document.querySelector("p");

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimer(2000).then(data => console.log(data, posData));
    },
    error => {
      console.log(error);
    }
  );
  setTimer(2000).then(() => console.log("Timer done!"));
  console.log("Getting position data...");
}

button.addEventListener("click", trackUserHandler);

// // Single threading in JS blocks code execution
// let result = 0;
// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }
// console.log(result);
