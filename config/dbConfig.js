const mongoose = require("mongoose");
require("dotenv").config("../.env");

const dbUrl = process.env.MONGO_URL;
mongoose.connect(dbUrl , (err) => { 
    console.log("mongodb connected",err);
})

const Message = mongoose.model("Message",{ name : String, message : String})
