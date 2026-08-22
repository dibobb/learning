
const passkey = {}
function callback (bot){
bot.on("callback_query", async (query)=> {
    const chatID = query.message.chat.id;
    if(query.data === "hello"){
       await  bot.sendPhoto(chatID, "./pictures/image.png")
    }else if (query.data === "/sybau"){
        await bot.sendSticker(chatID, "./stickers/sticker.webp")
    }else if (query.data === "Raix"){
       await  bot.sendPhoto(chatID, "./pictures/raix.jpg")
    }
      else if (query.data === "saitama"){
        await bot.sendAnimation(chatID, "./gifs/saitama.mp4")
    } else if(query.data === "ko't"){
        await bot.sendMediaGroup(chatID, [
            {
                type: "photo",
                media: "./pictures/bilol.jpg"
            },
            {
                type: "photo",
                media: "./pictures/kot.png"
            }
        ])
    }else if (query.data === "aiz"){
      await  bot.sendPhoto(chatID, "AgACAgIAAxkBAAIGHWpuYcpkBWhqObBWA4JEJIm_JMpwAAJuGmsbqrh4S2RjOoE4iCDIAQADAgADeAADPQQ");
      await sleep(300);
       bot.sendMessage(chatID, "@KR0V0stok")
    }

  switch(query.data){
    case "music_1":
     await    bot.sendAudio(chatID,
            fs.createReadStream("./music/wawawa.m4a")
         )

        break;
         case "music_2":
     await    bot.sendAudio(chatID,
            fs.createReadStream("./music/FKU.m4a",{
                reply_markup:{
                    inline_keyboard:[
                        ["abc"]
                    ]
                }
            })
        )

        break;

        case "music_3":
        await    bot.sendAudio(chatID,
                

                fs.createReadStream("./music/Heavenly-Jumpstyle.mp3")
            )

            break;

            case "music_4":

                await bot.sendAudio(chatID,"CQACAgIAAxkBAAIE_2ptGtxrLTb0hbLe9DvwkZUwvD-xAAJzFQACnW7ISMppybG_KaIyPQQ" )

           break;

           case "music_5":
            await bot.sendAudio(chatID ,  "CQACAgQAAxkBAAIFJGptNVvRORJgTbuy9hCq48NzmWcKAAKDBwACphOpUGcaLIhmyfdtPQQ")
            break;
            case "music_6":
                await bot.sendAudio(chatID, "CQACAgEAAxkBAAIH-GqGQnRm89PSSIfZV0lZ0QJPb6UbAAJ2BAAC7I_hR7VtBwfMZ4L_PQQ")
                break;

                case "cringe_okay":
                    passkey[chatID] = true;
                   await  bot.sendMessage(chatID, "Waiting for the pass key...");
                
                    
       break;

       case "cringe_cancel":
        delete passkey[chatID];

        await bot.sendMessage(chatID, "Cancelled!");

        break;
        }
        
    });
}


module.exports = callback