const addMovieBtn = document.getElementById("add-movie-btn");
const searchMovieBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = () => {
  const movieList = document.getElementById("movie-list");
  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = ""; // clear all elements (not ideal)

  movies.forEach(movie => {
    const movieEl = document.createElement("li");
    movieEl.textContent = movie.info.title;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  // get user inputs and add to move
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  // add new object
  const newMovie = {
    id: Math.random(),
    info: {
      title: title,
      [extraName]: extraValue
    }
  };

  // add to list
  movies.push(newMovie);
  renderMovies();
};

addMovieBtn.addEventListener("click", addMovieHandler);
