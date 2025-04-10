import express from "express"
import dotenv from "dotenv"
import jokeRoutes from "./routes/jokeRoutes"
import mathRoutes from "./routes/mathRoutes"

dotenv.config()

const app = express()
app.use(express.json())

app.use("/joke", jokeRoutes)
app.use("/math", mathRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
