



function reaction (bot) {
    bot.on("audio", async (msg)=> {
    const chatId = msg.chat.id
    const messageId = msg.message_id;

    console.log("audi keldi");
    console.log(messageId);
    
    try{

     const result =    await bot.setMessageReaction(chatId, messageId, [
        {type: "emoji", emoji: "👌"}
     ]);
     console.log("reaction qoyldi", result);
     
    }catch(error){
console.log("xato",error.message);

    }
     

    })
}

module.exports = reaction