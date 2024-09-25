import express from "express"
import "dotenv/config"
import "./config/db.js"
import movie_Router from "./routes/movie-route.js"
import user_router from "./routes/user-route.js"

const app = express()
app.use(express.json())

app.use("/movie", movie_Router)
app.use("/user", user_router)

app.listen(process.env.API_PORT, ()=> {console.log("servidor rodando")})