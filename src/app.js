import express from "express";

const app = express();
app.use(express.json()); // middleware

const cachorros = [
    {
        id: 1,
        raca: "Poodle"
    },
    {
        id: 2,
        raca: "Labrador"
    }
]

function buscarCachorro(id) {
    return cachorros.findIndex(cachorro => {
        return cachorro.id === Number(id);
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/cachorros", (req, res) => {
    res.status(200).json(cachorros);
});

app.get("/cachorros/:id", (req, res) => {
    const index = buscarCachorro(req.params.id);
    res.status(200).json(cachorros[index]);
});

app.post("/cachorros", (req, res) => {
    cachorros.push(req.body);
    res.status(201).send("Cachorro cadastrado com sucesso.")
});

export default app;