import express from "express";
import cachorros from "./cachorroRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));
    app.use(express.json(), cachorros)
};

export default routes;