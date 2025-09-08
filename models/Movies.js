import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  genre: String,
  rating: String,
});

const Movie = mongoose.model("movie", movieSchema);

export default Movie;
