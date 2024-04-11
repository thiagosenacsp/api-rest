import express from "express";

const app = express();

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

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/cachorros", (req, res) => {
    res.status(200).json(cachorros);
});

export default app;