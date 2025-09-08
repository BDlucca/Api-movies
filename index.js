import express from "express";
import mongoose from "mongoose";
const app = express();
import Movie from "./models/Movies.js";
// importando rotas
import movieRoutes from "./routes/movieRoutes.js";

// configuraçao do express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", movieRoutes);

// conexao com o banco
mongoose.connect("mongodb://127.0.0.1:27017/api-movies");

//Rodando o API na porta 4000
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando em http://localhost:${port}.`);
});
