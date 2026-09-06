




require("dotenv").config();
// const axios = require("axios");
const express = require("express");
const bot = require("./bot/bot")
const callback = require("./callback");
const messages = require("./messages");
const id = require("./id")
const myCommands = require("./myCommands")
import reaction from "./reaction.js";
const app = express();
const PORT = process.env.PORT || 3000;
callback(bot);
messages(bot);
id(bot)
myCommands(bot);
reaction(bot)

app.get("/", (req, res) => {
    res.send("Bot is running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// console.log(process.cwd());







console.log(process.uptime());


