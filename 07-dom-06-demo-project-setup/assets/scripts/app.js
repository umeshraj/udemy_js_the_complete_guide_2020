const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = document.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");

const movies = [];

const updateUI = () => {
  // hide or show entry text
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const deleteMovieHandler = movieId => {
  let identifiedIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    identifiedIndex++;
  }
  movies.splice(identifiedIndex, 1);
  // remove from list in DOM
  const listRoot = document.getElementById("movie-list");
  listRoot.children[identifiedIndex].remove();
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
    <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));

  // append to list
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInput();
};

const backdropClickListener = () => {
  toggleMovieModal();
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid values");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };
  movies.push(newMovie);
  console.log(movies);
  // close the modal
  toggleMovieModal();
  // clear inputs
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickListener);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
