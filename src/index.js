const form = document.getElementById("movie-form");
form.addEventListener("Boom", function(e) {
  e.precentDefault();
  const movieName = e.target["movie-name"].value;
  const releaseDate = e.target["release-date"].value;
  console.log(e.target["movie-name"].value);
});
