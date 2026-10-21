




require("dotenv").config();
// const axios = require("axios");
const express = require("express");
const bot = require("./bot/bot.js")
const callback = require("./callback.js");
const messages = require("./messages.js");
const id = require("./id.js")
const myCommands = require("./myCommands.js")
// const reaction = require('./reaction')
const app = express();
const PORT = process.env.PORT || 3000;
callback(bot);
messages(bot);
id(bot)
myCommands(bot);
// reaction(bot)

app.get("/", (req, res) => {
    res.send("bilol kot!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// console.log(process.cwd());







console.log(process.uptime());


