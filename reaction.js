



function reaction (bot) {
    bot.on("audio", async (msg)=> {
    const chatId = msg.chat.id
    const messageId = msg.message_id;

     await bot.sendMessageReaction(chatId, messageId, [
        {type: "emoji", emoji: "👌"}
     ])

    })
}


export default reaction