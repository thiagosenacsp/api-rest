import express from "express";
import conectarDatabase from "./config/dbconnect.js";
import routes from "./routes/index.js";

const conexao = await conectarDatabase();

conexao.on("error", (erro) => {console.error("Erro de conexão", erro);
})

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})

const app = express();
routes(app);
// app é a nosso instância do express

// app.use(express.json()); // middleware

// app.get("/", (req, res) => {
//     res.status(200).send("Curso de Node.js");
// });

// app.get("/cachorros", async (req, res) => {
//     const listaCachorros = await cachorro.find({})
//     res.status(200).json(listaCachorros);
// });

// app.get("/cachorros/:id", (req, res) => {
//     const index = buscarCachorro(req.params.id);
//     res.status(200).json(cachorros[index]);
// });

// app.post("/cachorros", (req, res) => {
//     cachorros.push(req.body);
//     res.status(201).send("Cachorro cadastrado com sucesso.")
// });

// app.put("/cachorros/:id", (req, res) => {
//     const index = buscarCachorro(req.params.id);
//     cachorros[index].raca = req.body.raca;
//     // body da requisição
//     res.status(200).json(cachorros);
// });

app.delete("/cachorros/:id", (req, res) => {
    const index = buscarCachorro(req.params.id);
    cachorros.splice(index, 1);
    res.status(200).send("Cachorro removido.");
});

export default app;