var mongoose = require(mongoose’);

var dbUrl = "mongodb://username:pass@ds257981.mlab.com:57981/simple-chat";
mongoose.connect(dbUrl , (err) => { 
    console.log("mongodb connected",err);
})

var Message = mongoose.model(‘Message’,{ name : String, message : String})
