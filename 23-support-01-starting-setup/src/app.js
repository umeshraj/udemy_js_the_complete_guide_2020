// import "core-js/features/promise";

const button = document.querySelector("button");
const textParagaph = document.querySelector("p");

button.addEventListener("click", () => {
  const text = textParagaph.textContent;
  const promise = new Promise();
  console.log(promise);
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    alert("Feature not available!");
  }
});
