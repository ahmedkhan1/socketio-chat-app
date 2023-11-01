const io = require("../../socket.js");
const express = require('express');
const router = express.Router();

router.get('/messages', (req, res) => {
  Message.find({},(err, messages)=> {
    res.send(messages);
  })
});


router.post('/messages', (req, res) => {
  var message = new Message(req.body);
  message.save((err) =>{
    if(err)
      sendStatus(500);
    
    io.emit('message', req.body);
    res.sendStatus(200);
  })
})

module.exports = router;