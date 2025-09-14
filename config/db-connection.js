// importando o mongoose
import mongoose from "mongoose";
// usuario e senha do banco de dados
const dbUser = "brunodelucca12_db_user";
const dbPassword = "z8GptNnid1o6B0TM";
const connect = () => {
  mongoose.connect(
    "mongodb+srv://brunodelucca12_db_user:z8GptNnid1o6B0TM@cluster0.kclhjt2.mongodb.net/Api-movies?retryWrites=true&w=majority&appName=Cluster0"
  );
  const connection = mongoose.connection;
  connection.on("error", () => {
    console.log("Erro ao conectar com mongoDB");
  });
  connection.on("open", () => {
    console.log("Conectado ao mongoDB com sucesso");
  });
};
connect();
export default mongoose;
