const telegramBot = require("node-telegram-bot-api").default;

if(!process.env.TOKEN){
    console.log("TOKEN Toplmadi!");
    process.exit();
    
}

const bot = new telegramBot(process.env.TOKEN, {
    polling: true
});

module.exports = bot