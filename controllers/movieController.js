import movieService from "../services/movieService.js";
import { ObjectId } from "mongodb";

// funçao para listar os filmes
const getAllmovies = async (req, res) => {
  try {
    const movies = await movieService.getAll();
    res.status(200).json({ movies: movies });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error interno no servidor" });
  }
};
// funçao de cadastrar movies
const createMovie = async (req, res) => {
  try {
    const { title, year, genre, rating } = req.body;
    await movieService.Create(title, year, genre, rating);
    res.sendStatus(201); // recurso criado
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export default { getAllmovies, createMovie };
