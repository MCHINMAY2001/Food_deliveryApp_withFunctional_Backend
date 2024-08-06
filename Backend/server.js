import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"



//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())


//db connection
connectDB();


//api end points
app.use("/api/food",foodRouter)


app.get("/",(req,res)=>{
    res.send("API Working");
})


app.listen(port,()=>{
    // console.log("Server listening at port 40000");
    console.log(`Server started at on http://localhost:${port}`)
})

//mongodb+srv://chinmaycdr2001:767025@cluster0.sb9ciaw.mongodb.net?