import { Router } from "express"
import { signup, login } from "../controllers/user-controller"

const router = Router()

/*
crusd usuairo

*/

router.post("/signup", signup)
router.post("/login", login)