const mongoose = require(mongoose’);

const dbUrl = "mongodb://username:pass@ds257981.mlab.com:57981/simple-chat";
mongoose.connect(dbUrl , (err) => { 
    console.log("mongodb connected",err);
})

const Message = mongoose.model(‘Message’,{ name : String, message : String})
