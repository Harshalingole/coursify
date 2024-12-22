import express, { Application } from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
// import adminRoutes from './routes/adminRoutes'
dotenv.config()
const app:Application = express()

// Express Configuration
app.set("port",process.env.PORT)

// Middlewares
app.use(express.json())


// Api Routes
app.use("/",(req,res) => {
  res.send("Coursify Home")
})

app.use("/api/user/",userRoutes)
// app.use("/api/admin",adminRoutes)

export default app