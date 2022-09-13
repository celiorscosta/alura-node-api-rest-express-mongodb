import express from "express";
import AutorController from "../controllers/editorasController.js";

const router = express.Router();

router
    .get("/editoras", AutorController.listarEditoras)
    .get("/editoras/:id", AutorController.listarEditoraPorId)
    .post("/editoras", AutorController.cadastrarEditora)
    .put("/editoras/:id", AutorController.atualizarEditora)
    .delete("/editoras/:id", AutorController.excluirEditora)

export default router;