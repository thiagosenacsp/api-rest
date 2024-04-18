import express from "express";
import CachorroController from "../controllers/cachorroController.js";

const routes = express.Router();

routes.get("/cachorros", CachorroController.listarCachorros);
routes.get("/cachorros/:id", CachorroController.listarCachorroPorId);
routes.post("/cachorros", CachorroController.cadastrarCachorro);
routes.put("/cachorros/:id", CachorroController.atualizarCachorro);
routes.delete("/cachorros/:id", CachorroController.excluirCachorro);

export default routes;