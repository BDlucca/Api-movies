import express from "express";
const moviesRoutes = express.Router();
import movieController from "../controllers/movieController.js";

// endpoit para listar
moviesRoutes.get("/movies", movieController.getAllmovies);

//endpoit para cadastar
moviesRoutes.post("/movies", movieController.createMovie);

export default moviesRoutes;
