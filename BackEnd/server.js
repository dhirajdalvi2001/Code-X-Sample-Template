const express = require("express")
const dotenv = require("dotenv")
const { chats } = require("./data/data")

const app = express()
dotenv.config()
const PORT = process.env.port || 4000;

app.get("/", (req, res) => {
    res.send("Yo");
})

app.get('/api/chat', (req, res) => {
    res.send(chats);
})

app.get('/api/chat/:id', (req, res) => {
    singleChat = chats.find(e => e._id === req.params.id)
    res.send(singleChat);
})

app.listen(PORT, console.log("Server Started!"))