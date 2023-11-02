

const getMessages = (req, res) => {
    Message.find({},(err, messages)=> {
        res.send(messages);
    })
}

const sendMessage = (req, res) => {
    var message = new Message(req.body);
    message.save((err) =>{
      if(err)
        sendStatus(500);
      
      io.emit('message', req.body);
      res.sendStatus(200);
    })
}


module.exports = {
    getMessages,
    sendMessage
}