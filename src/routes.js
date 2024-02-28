import { Router } from "express";
import MoviesController from "./app/controllers/MoviesController.js";

const router = Router();

router.get('/movies', MoviesController.index)
router.get('/movies/:id', MoviesController.show)
router.post('/movies', MoviesController.store)

export default router;