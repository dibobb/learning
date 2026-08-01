// require("dotenv").config();
// const telegramBot = require("node-telegram-bot-api").default
// const axios = require("axios");
// const fs = require('fs')

// const bot = new telegramBot(process.env.TOKEN, {
//     polling: true
// });


// const userState = {};


// bot.on("message", async (msg)=>{
//     const chatID = msg.chat.id
//    const text = msg.text
//    const username = msg.from.first_name
//   console.log("kelgan text" ,text);
  
//    if(text ===  "Kino"){
//     userState[chatID] = "Movie"
//     bot.sendMessage(chatID, " Kino bo'limiga xush kelbsiz ")
//     bot.sendMessage(chatID , "qidirish yo'lini tanlang ", {
//         reply_markup:{
//             keyboard:[
//                 ["orqaga","kodi orqali", "nomi orqali"]
//             ],
//             resize_keyboard: true
//         }
//     })
//    }else if (text === "orqaga"){
//      bot.sendMessage(chatID , "asosiy bo'lim", {
//         reply_markup:{
//             keyboard:[
//               ["Kino" , "anime", "stock","codes"]
//             ],
//             resize_keyboard: true
//         }
//    })

// }else if (text === "kodi orqali"){
//     bot.sendMessage(chatID, "Kino kodini kiritng...")
//    bot.sendMessage(chatID, "mavjud kodlar ro'yxati:/Kroyxatskibidi", {
//     })
// }else if (text === "/Kroyxatskibidi"){
//  bot.sendMessage(chatID, " skibidi toilet - short trailer: 78", {
//     })
// }else if (text === "78"){

//     console.log("code yozildi");
//     try{ await bot.sendVideo(chatID, fs.createReadStream("./videos/skibidi-78.mp4") )
       
        

//     }catch(error){
//         console.log(error);
        
//     }
 
// }
//    if(text === "/start"){
//        bot.sendPhoto(chatID, "./pictures/hello.png", {

//        caption: `hello ${username} 😉
//         mavjud commandlar:
//          /start |  /freeBobux | /time | /stock`

//        })
//     setTimeout(() => {
//         bot.sendMessage(chatID, "Tanlang", {
//     reply_markup: {
//         keyboard:[
//             ["Kino" , "anime", "stock","codes"]
//         ],
//         resize_keyboard: true
//     }
//     }, 3000);
         
    
    
//    })

//    }else if (text === "/time"){
//     const time = new Date().toLocaleTimeString("en-Us", {
//         timeZone: "asia/tashkent",
//         minute: "2-digit",
//         hour: "2-digit",
//         hour12: false


//     })
//     bot.sendMessage( chatID , `hozirgi vaqt ${time}`)

//    }else if (text === "/freeBobux"){
//     bot.sendMessage(chatID, "Kambag'aaaaaal ishla😂🖕 ")
//    }else if(text === "😤") {
      
//     bot.sendMessage(chatID,"🤣")
//    }else if(text === "salom"){

//     bot.sendMessage(chatID, "salom kechirasiz menga faqat commanlar orqali murojat qiling!")
//     }else if (text === "/stock"){
//         try{
//             const response =  await axios.get("https://blox-fruits-api.onrender.com/api/bloxfruits/stock")
//             console.log(response.data);
            
//         }catch(err){
//             console.log(err);
//             bot.sendMessage(chatID, "the stock is currently unavailable😔")
            
//         }

//     }
    



// //    text === "man kimman" ? bot.sendMessage(chatID, "san kotsan") : bot.sendMessage(chatID, "Sorry i dont know that command currently")
  
// })



require("dotenv").config();
const telegramBot = require("node-telegram-bot-api").default;
const axios = require("axios");
const { assert, log } = require("console");
const fs = require("fs");
const { type } = require("os");

const bot = new telegramBot(process.env.TOKEN, {
    polling: true
});

const userState = {};

bot.on("message", async (msg) => {

    const chatID = msg.chat.id;
    const text = msg.text?.trim();
    const username = msg.from.first_name; 
  
    console.log("Kelgan text:", text);



  if(text ==="/freeBobux".toLocaleLowerCase() || text === "/freeBobux"){
         await bot.sendMessage(
                chatID,
                "Kambag'aaaaaal ishla 😂🖕"
            );

  }

    switch(text) {

        case "Kino":

            userState[chatID] = "Movie";
        
            await bot.sendMessage(
                chatID,
                "Kino bo'limiga xush kelibsiz"
            );

            await bot.sendMessage(
                chatID,
                "Qidirish yo'lini tanlang",
                {
                    reply_markup:{
                        keyboard:[
                            ["orqaga", "kodi orqali", "nomi orqali"]
                        ],
                        resize_keyboard:true
                    }
                }
            );

            break;


        case "orqaga":

            await bot.sendMessage(
                chatID,
                "Asosiy bo'lim",
                {
                    reply_markup:{
                        keyboard:[
                            ["Kino", "Anime", "Stock", "Codes", "Music"]
                        ],
                        resize_keyboard:true
                    }
                }
            );

            break;

            case "Music":

         await  bot.sendMessage(chatID, ` Bor musiclar: \n1: WA-WA-WA Funk \n2:Montagem-Derecao(Mega slowed)\n  3: Heavenly_Jumpstyle\n 4:Rise up\n 5: Andreas Stone With Denniz Jamm - Black Sunrise `,

             {
                parse_mode: "HTML",
                reply_markup:{
                    inline_keyboard:[
                        [
                             {text: "1", callback_data: "music_1"},
                             {text: "2", callback_data: "music_2"},
                             {text: "3", callback_data: "music_3"},
                             {text: "4", callback_data: "music_4"},
                             {text: "5", callback_data: "music_5"}
                            
                        ]
                    ]
                }
             
             }
            )

                 await  bot.sendMessage(chatID, "⬇️",
             {
              
                reply_markup:{
                    keyboard:[
                      ["orqaga"]
                    ],
                    resize_keyboard: true
                }
             }
            )



     break;


        case "kodi orqali":

            await bot.sendMessage(
                chatID,
                "Kino kodini kiriting..."
            );

            await bot.sendMessage(
                chatID,
                "Mavjud kodlar ro'yxati: /Kroyxatskibidi"
            );

            break;

            case "nomi orqali": 

            await bot.sendMessage(chatID, "Kino nomini kiriting...")

         break;
        case "/Kroyxatskibidi":

            await bot.sendMessage(
                chatID,
                "skibidi toilet - short trailer: 78"
            );

            break;


        case "78":

            console.log("code yozildi");

            try {

                await bot.sendVideo(
                    chatID,
                    fs.createReadStream("./videos/skibidi.mp4")
                );

                

                console.log("video yuborildi");

            } catch(error){

                console.log(error);

            }

            break;


        case "/start":

            await bot.sendPhoto(
                chatID,
                "./pictures/hello.png",
                {
                    caption:
`hello ${username} 😉

mavjud commandlar:
 /start | /freeBobux | /time | /stock | /sticker | /photos \n | /my` 
                }
            );


            setTimeout(() => {

                bot.sendMessage(
                    chatID,
                    "Tanlang",
                    {
                        reply_markup:{
                            keyboard:[
                                ["Kino", "anime", "stock", "codes", "Music"]
                            ],
                            resize_keyboard:true
                        }
                    }
                );

            },3000);


            break;


        case "/time":

            const time = new Date().toLocaleTimeString(
                "en-US",
                {
                    timeZone:"Asia/Tashkent",
                    hour:"2-digit",
                    minute:"2-digit",
                    second: "2-digit",
                    hour12:false
                }
            );

            await bot.sendMessage(
                chatID,
                `Hozirgi vaqt ${time}`
            );

            break;



        case "😤":

            await bot.sendMessage(
                chatID,
                "🤣"
            );

            break;


        case "salom":

            await bot.sendMessage(
                chatID,
                "Salom, menga faqat commandlar orqali murojaat qiling!"
            );

            break;


        case "/stock":

            try {

                const response = await axios.get(
                    "https://blox-fruits-api.onrender.com/api/bloxfruits/stock"
                );

                if(Object.keys(stock).length === 0){
                    bot.sendMessage(chatID, "hozircha stockda hechnarsa yo'q😊")
                }

                console.log(response.data);

                await bot.sendMessage(
                    chatID,
                    JSON.stringify(response.data)
                );

            } catch(err){

                console.log(err);

                await bot.sendMessage(
                    chatID,
                    "The stock is currently unavailable 😔"
                );

            }

            break;


        default:

          await bot.sendSticker(chatID,"CAACAgEAAxkBAAIE0Gps4nnWE36Ai6hut3bYPZ3MsY61AAJBAwACDsLwRxThhrV-ovE_PQQ" )         
// await axios.post(
//   `https://api.telegram.org/bot${process.env.TOKEN}/sendMessage`,
//   {
//     chat_id: chatID,
//     text: "A",
//     entities: [
//       {
//         offset: 0,
//         length: 1,
//         type: "custom_emoji",
//         custom_emoji_id: "5328145443106873128"
//       }
//     ]
//   }
// );

            console.log("Bunday command yo'q:", msg.text);

            break;


            case "/sticker":
                bot.sendSticker(chatID, 

                    fs.createReadStream("./stickers/sticker.webp")
                )

                break;

                case "/sybau":
                    bot.sendPhoto(chatID, "./stickers/sticker.webp")

                    break;

                    case "hello": 
                 await  bot.sendPhoto(chatID, "./pictures/image.png")

                    break;

                    case "/photos":
                      bot.sendMessage(chatID, "codelar",{

                    reply_markup: {
                      inline_keyboard: [
                        [
                          {
                              text: "hello",
                              callback_data: "hello"
                          },
                            {
                              text: "/sybau",
                              callback_data: "/sybau"
                           },
                           {
                            text: "Raix",
                            callback_data: "Raix"
                           },
                        //    {
                        //     text: "videos",
                        //     callback_data: "videos"
                        //    },
                              {
                            text: "auratama",
                            callback_data: "saitama"
                           }, {
                            text :"ko't",
                            callback_data: "ko't"
                           }
                       ]
                    ]
                  }
              });
              break;

            case "/my":
  bot.sendMessage(chatID, "Playlaringiz:\n1: WA-WA-WA Funk \n2:Montagem-Derecao(Mega slowed)\n  3: Heavenly_Jumpstyle\n 4: Rise Up\n 5: Andreas Stone With Denniz Jamm - Black Sunrise ",
    {
    reply_markup:{
        inline_keyboard:[
            [
            
                {text: "1", callback_data: "music_1"},
                {text: "2", callback_data: "music_2"},
                {text: "3", callback_data: "music_3"},
                {text: "4", callback_data: "music_4"},
                {text: "5", callback_data: "music_5"},

            ]  
                      
        ]
            }
  })
            
           break;
         
            
           case "music_1":
            await bot.sendAudio(chatID, "",{
                 reply_markup:{
        inline_keyboard:[
            [
            
                {text: "A", callback_data: "fav"},

            ]  
                      
        ]
            }
            })

            break;
              case "colette":
            case "colette❤️":
                bot.sendSticker(chatID, "CAACAgIAAxkBAAIE2Gps47RAFIcpsbF-1HmjBSNMFjMCAAIBNAAC8qbxSzwhcaxsD0YYPQQ")
                break;

                case "qlash":
                case "Qlash":
                    bot.sendSticker(chatID, "CAACAgIAAxkBAAIE8Wps71Aqgb5ljWGf_nj81oR1Fp6OAAItNwACS2EJSR9_jgyLH804PQQ")

                    break;

                    case "secret":
                        bot.sendVideo(chatID, "BAACAgIAAxkBAAIFVWpuHQgRqtVL6dmC38JvqGid-OG3AAKrlQACbr6ASkCXMFP7HO4WPQQ")

                        break;

                        case "to lick":
                        case "To lick":
                            bot.sendSticker(chatID, "CAACAgIAAxkBAAIFYmpuH5ZVX6fZCrFzWcKOwhWbBq7rAAKJcAACigABKEsQZoQUNViG3D0E")    
    }

});






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
    }

  switch(query.data){
    case "music_1":
     await   bot.sendAudio(chatID,
            fs.createReadStream("./music/wawawa.m4a")
        )

        break;
         case "music_2":
     await   bot.sendAudio(chatID,
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
        }
        
    });




    bot.on("message", (msg) => {
  if (msg.entities) {
    for (const entity of msg.entities) {
      if (entity.type === "custom_emoji") {
        console.log(" emoji ID:", entity.custom_emoji_id);
      }
    }
  }

  if(msg.sticker){
    console.log("sticker id:",msg.sticker.file_id);
    
  }

  if(msg.audio){
    console.log("Music id:", msg.audio.file_id, );
    console.log("Music name:",msg.audio.file_name );
  };
  if(msg.video){
    console.log("Video name:", msg.video.file_name);
    console.log("Video id:", msg.video.file_id);
    
  }
});



// else if(query.data === "videos"){
//          try{
//           await   bot.sendVideo(chatID, "./videos/gojo.mp4" )
//          }catch(error){
//              console.log(error);
            
//        }
//      }


//we'll check it later>
// const commands = {
//     "/start": require("./commands/start"),
//     "/time": require("./commands/time"),
//     "/stock": require("./commands/stock"),
// };

// if (commands[text]) {
//     await commands[text](bot, chatID, msg);
// } else {
//     await bot.sendSticker(chatID, "...");
// }