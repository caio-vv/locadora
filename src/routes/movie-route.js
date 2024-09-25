import { Router } from "express";
import movie_controller from "../controllers/movie-controller.js";
import jwtAuth from "../middlewares/jwt-authenticator.js";

const router = Router()

router.post("/", jwtAuth, movie_controller.store)
router.get("/", movie_controller.index)


export default router