let movieContainer = document.getElementById("movieContainer");

function renderFavorites() {
  const fvtmovie = JSON.parse(localStorage.getItem("favorites"));
  if (fvtmovie.length > 0) {
    movieContainer.innerHTML = ""
    fvtmovie.forEach((movie) => {
      const movieCard = document.createElement("div");
      movieCard.classList.add("posters");

      const link = document.createElement("a");
      link.href = "MoviesAbout.html";

      const img = document.createElement("img");
      img.src = movie.medium_cover_image;

      link.appendChild(img);
      movieCard.appendChild(link);
      movieContainer.appendChild(movieCard);
    });
  }
}

renderFavorites();
