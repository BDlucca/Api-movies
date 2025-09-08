import Movie from "../models/Movies.js";

class movieService {
  //Buscando os registro do banco
  async getAll() {
    try {
      const movie = await movie.find();
      return movie;
    } catch (error) {
      console.log(error);
    }
  }
  // cadastrando registros no banco
  async Create(title, year, genre, rating) {
    try {
      const newMovie = new Movie({
        title,
        year,
        genre,
        rating,
      });
      await newMovie.save();
    } catch (error) {
      console.log(error);
    }
  }
}
export default new movieService();
