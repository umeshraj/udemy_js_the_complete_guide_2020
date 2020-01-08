const addMovieBtn = document.getElementById("add-movie-btn");
const searchMovieBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");
  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = ""; // clear all elements (not ideal)

  // get filtered movie list
  const filteredMovies = !filter
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter));

  filteredMovies.forEach(movie => {
    const movieEl = document.createElement("li");
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    // const { title: movietTitle } = info;
    let { getFormattedTitle } = movie;
    // manually bind this to the respective object
    // getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle.call(movie) + " - ";
    for (const key in info) {
      if (key !== "title") {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;

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
    },
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    }
  };

  // add to list
  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = function() {
  console.log(this);
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchMovieBtn.addEventListener("click", searchMovieHandler);
