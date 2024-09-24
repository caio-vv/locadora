import { Router } from "express";
import movie_controller from "../controllers/movie-controller.js";

const router = Router()

router.post("/", movie_controller.store)
router.get("/", movie_controller.index)


export default router