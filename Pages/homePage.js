class HomePage {
  static container = document.getElementById("container");
  static renderMovies(movies) {
    container.classList.add(
      "d-flex",
      "justify-content-around",
      "flex-row",
      "flex-wrap"
    );
    // movie is a single object from the array of objects "movies"
    this.container.innerHTML = "";
    movies.forEach((movie) => {
      console.log(movie);
      const movieDiv = document.createElement("div");
      const wrapper = document.createElement("div");
      const cards = document.createElement("div");
      const figure = document.createElement("figure");
      const figCaption = document.createElement("figcaption");
      const badge = document.createElement("span")
      badge.classList.add(
        "badge",
        "badge-pill",
        "badge-danger"
      );
      badge.innerText = movie.rating
      figCaption.appendChild(badge)
      //<span class="badge badge-pill badge-danger">Danger</span>
      wrapper.className = "wrapper";
      cards.className = "cards";
      figure.className = "card";
      //figCaption.innerText = movie.rating;
      movieDiv.classList.add(
        "m-4",
        "w-25",
        "clickable",
        "reveal",
        "movie-card"
      );
      const movieImage = document.createElement("img");
      movieImage.src = `${
        movie.posterUrl ? movie.posterUrl : movie.backdropUrl
      }`;
      movieImage.style.width = "18rem";
      const movieTitle = document.createElement("h3");
      movieTitle.textContent = `${movie.title ? movie.title : movie.name}`;

      movieDiv.addEventListener("click", function () {
        if (movie.title) {
          MoviesInfo.run(movie);
        } else {
          ActorInfo.run(movie);
        }
        // setTimeout(function () {
        //   window.scrollTo(0, 0);
        // }, 400);
      });
      figure.append(movieImage, figCaption);
      cards.appendChild(figure);
      wrapper.appendChild(cards);
      movieDiv.appendChild(wrapper);
      movieDiv.appendChild(movieTitle);
      this.container.appendChild(movieDiv);
      ScrollReveal().reveal(".reveal", {
        delay: 100,
        distance: "150%",
        origin: "bottom",
        opacity: null,
      });
    });
  }
}
