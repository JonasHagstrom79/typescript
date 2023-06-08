let movieTitle: string = "The Godfather";
movieTitle.toUpperCase();

// the any type
let thing: any = "Hello";
thing = 1;
thing = true;
thing = [1, 2, 3];

// Use type annotation to implicit any
const movies = ["The Godfather", "The Dark Knight", "The Room"];

let foundMovie: string;

for (let movie of movies) {
  if (movie === "The Room") {
    foundMovie = movie;
  }
}