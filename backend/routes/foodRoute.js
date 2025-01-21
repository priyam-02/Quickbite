import express from 'express';
import { addFood } from '../controllers/foodController.js'
import multer from 'multer';

const foodRouter = express.Router(); // using this router we can create multiple endpoints, like get, post, put, delete.



// Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)

    }
})

const upload = multer({storage: storage}); // using this we can upload image.

foodRouter.post("/add", upload.single("image"), addFood); // using this we can add food item.




export default foodRouter; // exporting foodRouter.