const API_URL = "https://yts.mx/api/v2/list_movies.json?query_term=";

async function fetchMovies() {
  const searchTerm = document.getElementById("searchmovie").value || '';

  try {
    const response = await fetch(API_URL + searchTerm);
    if (!response.ok) {
      throw new Error("Could not find resources");
    }

    const data = await response.json();
    console.log(data.data.movies);
    renderMovies(data.data.movies)
  } catch (error) {
    console.error(error);
  }
}

function renderMovies(movies) {
    let movieContainer = document.getElementById('movie-container')
    movieContainer.innerHTML = ''
    for (let index = 0; index < movies.length; index++) {
        const movie = movies[index];
        const movieCard = document.createElement('div')
        movieCard.classList.add('posters')

        const link = document.createElement('a')
        link.href = "MoviesAbout.html"
        
        const img = document.createElement('img')
        img.src = movie.medium_cover_image
        
        const fvtBtn = document.createElement('button')
        
        fvtBtn.textContent = "Add to Favorite"
        fvtBtn.addEventListener('click', function() {
          handleFvtButtonClick(movie);
        });
        movieCard.appendChild(fvtBtn)
        link.appendChild(img)
        movieCard.appendChild(link)
        movieContainer.appendChild(movieCard)

    }
}

function handleFvtButtonClick(movie) {
  const favList = JSON.parse(localStorage.getItem('favorites')) || [];

  // Check if the movie is already in the favorites list
  const isMovieInFavorites = favList.some((favMovie) => favMovie.id === movie.id);
console.log(isMovieInFavorites,movie);
  if (!isMovieInFavorites) {
    favList.push(movie);
    localStorage.setItem('favorites', JSON.stringify(favList));
    alert("Added " + movie.title + " to Favorites");
  } else {
    alert(movie.title + " is already in Favorites");
  }
}


fetchMovies()
