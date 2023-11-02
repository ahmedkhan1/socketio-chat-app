

const getMessages = (req, res) => {
    Message.find({},(err, messages)=> {
        res.send(messages);
    })
}

const sendMessage = (req, res) => {

}


module.exports = {
    getMessages,
    sendMessage
}