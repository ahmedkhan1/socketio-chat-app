const io = require("../socket.js")
const app = express();

app.get('/messages', (req, res) => {
  Message.find({},(err, messages)=> {
    res.send(messages);
  })
});


app.post('/messages', (req, res) => {
  var message = new Message(req.body);
  message.save((err) =>{
    if(err)
      sendStatus(500);
    
    io.emit('message', req.body);
    res.sendStatus(200);
  })
})