import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';


// app config
const app = express()
const port = 4000;

// middleware
app.use(express.json()); // whenerver we get request from frontend to backend, it will be passed using this json.
app.use(cors()); // using this we can access backend from any frontend.


// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter); // using this we can access foodRouter from frontend.
app.use("/images", express.static("uploads"));


app.get("/", (req,res)=>{ // A http method to request data from server, here we have to give the path where we want to run this endpoint.
    res.send("API Working") //Whenever we will open this endpoint, we will get this response.

}) 

app.listen(port, () => { // to run the express server, we have to give port number here.
    console.log(`Server started on http://localhost:${port}`) 
}) 


