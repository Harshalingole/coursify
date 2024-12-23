import express, { Application } from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'

dotenv.config()
const app:Application = express()

// Express Configuration
app.set("port",process.env.PORT)

// Middlewares
app.use(cors({
  origin: process.env.CORS_ORIGIN
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// Api Routes
app.get("/",(req,res) => {
  res.send("Coursify Home Server.ts")
})

app.use("/api/user",userRoutes)
// app.use("/api/admin",adminRoutes)

export default app