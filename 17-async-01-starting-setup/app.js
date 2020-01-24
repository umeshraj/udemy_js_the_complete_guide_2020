const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = opts => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success);
      },
      error => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  // define variables due to block scoping in try/catch
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);
  // .then(posData => {
  //   // console.log(posData);
  //   positionData = posData;
  //   return setTimer(2000);
  // })
  // .catch(err => {
  //   console.log(err);
  // })
  // .then(data => console.log(data, positionData));

  // setTimer(2000).then(() => console.log("Timer done!"));
  // console.log("Getting position data...");
}

button.addEventListener("click", trackUserHandler);

// // Single threading in JS blocks code execution
// let result = 0;
// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }
// console.log(result);
