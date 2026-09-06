



function reaction (bot) {
    bot.on("audio", async (msg)=> {
    const chatId = msg.chat.id
    const messageId = msg.message_id;

    console.log("audi keldi");
    console.log(messageId);
    
    try{

        await bot.setMessageReaction(chatId, messageId, [
        {type: "emoji", emoji: "👌"}
     ]);
     console.log("reaction qoyldi");
     
    }catch(error){
console.log("xato",error.message);

    }
     

    })
}


export default reaction