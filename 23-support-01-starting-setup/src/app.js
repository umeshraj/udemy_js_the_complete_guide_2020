const button = document.querySelector("button");
const textParagaph = document.querySelector("p");

button.addEventListener("click", () => {
  const text = textParagaph.textContent;
  navigator.clipboard
    .writeText(text)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });
});
