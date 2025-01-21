import foodModel from "../models/foodModel.js";

// File System, fs is a core built-in module of node.js, it is used to read and write files. 
//Provides an API for interacting with the file system on your computer. 
import fs from "fs"; 


// add food item

const addFood = async(req, res) => {
    
    let image_filename = `${req.file.filename}`; // get the image filename from the request object.

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
        
    });
    try {
        await food.save();
        res.json({ sucess: true, message: "Food added"})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error"})
    }

}

export { addFood }; // exporting addFood function.