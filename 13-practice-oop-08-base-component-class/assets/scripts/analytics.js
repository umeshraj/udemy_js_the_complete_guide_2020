const intervalId = setInterval(() => {
  console.log("Sending analytics data...");
}, 3000);

document
  .getElementById("stop-analytics-btn")
  .addEventListener("click", () => clearTimeout(intervalId));
