const addMovieBtn = document.getElementById("add-movie-btn");
const searchMovieBtn = document.getElementById("search-btn");

const movie = [];

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
  movie.push(newMovie);
  console.log(newMovie);
};

addMovieBtn.addEventListener("click", addMovieHandler);
