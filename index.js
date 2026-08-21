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



// require("dotenv").config();
// const telegramBot = require("node-telegram-bot-api").default;
// const axios = require("axios");
// const { assert, log, trace } = require("console");
// const { resolve } = require("dns");
// const fs = require("fs");
// const { type } = require("os");

// const bot = new telegramBot(process.env.TOKEN, {
//     polling: true
// });


 

// if(!process.env.TOKEN){
//     console.log("TOKEN Toplmadi!");
//     process.exit();
    
// }

// // console.log(process.cwd());


// const userState = {};

// bot.on("message", async (msg) => {

//     const chatID = msg.chat.id;
//     const text = msg.text?.trim();
//     const username = msg.from.first_name; 
  
//     console.log("Kelgan text:", text);



//   if(text ==="/freebobux"){
//          await bot.sendMessage(
//                 chatID,
//                 "Kambag'aaaaaal ishla 😂🖕"
//             );

//   }

//     switch(text) {

//         case "Kino":

//             userState[chatID] = "Movie";
        
//             await bot.sendMessage(
//                 chatID,
//                 "Kino bo'limiga xush kelibsiz"
//             );

//             await bot.sendMessage(
//                 chatID,
//                 "Qidirish yo'lini tanlang",
//                 {
//                     reply_markup:{
//                         keyboard:[
//                             ["orqaga", "kodi orqali", "nomi orqali"]
//                         ],
//                         resize_keyboard:true
//                     }
//                 }
//             );

//             break;


//         case "orqaga":

//             await bot.sendMessage(
//                 chatID,
//                 "Asosiy bo'lim",
//                 {
//                     reply_markup:{
//                         keyboard:[
//                             ["Kino", "Anime", "Stock", "Codes", "Music"]
//                         ],
//                         resize_keyboard:true
//                     }
//                 }
//             );

//             break;

//             case "Music":

//          await  bot.sendMessage(chatID, ` Bor musiclar: \n1: WA-WA-WA Funk \n2:Montagem-Derecao(Mega slowed)\n  3: Heavenly_Jumpstyle\n 4:Rise up\n 5: Andreas Stone With Denniz Jamm - Black Sunrise `,

//              {
//                 parse_mode: "HTML",
//                 reply_markup:{
//                     inline_keyboard:[
//                         [
//                              {text: "1", callback_data: "music_1"},
//                              {text: "2", callback_data: "music_2"},
//                              {text: "3", callback_data: "music_3"},
//                              {text: "4", callback_data: "music_4"},
//                              {text: "5", callback_data: "music_5"}
                            
//                         ]
//                     ]
//                 }
             
//              }
//             )

//                  await  bot.sendMessage(chatID, "⬇️",
//              {
              
//                 reply_markup:{
//                     keyboard:[
//                       ["orqaga"]
//                     ],
//                     resize_keyboard: true
//                 }
//              }
//             )



//      break;


//         case "kodi orqali":

//             await bot.sendMessage(
//                 chatID,
//                 "Kino kodini kiriting..."
//             );

//             await bot.sendMessage(
//                 chatID,
//                 "Mavjud kodlar ro'yxati: /kroyxatskibidi"
//             );

//             break;

//             case "nomi orqali": 

//             await bot.sendMessage(chatID, "Kino nomini kiriting...")

//          break;
//         case "/kroyxatskibidi":

//             await bot.sendMessage(
//                 chatID,
//                 "skibidi toilet - short trailer: 78"
//             );

//             break;


//         case "78":

//             console.log("code yozildi");

//             try {

//                 await bot.sendVideo(
//                     chatID,
//                     fs.createReadStream("./videos/skibidi.mp4")
//                 );

                

//                 console.log("video yuborildi");

//             } catch(error){

//                 console.log(error);

//             }

//             break;


//         case "/start":

//             await bot.sendPhoto(
//                 chatID,
//                 "./pictures/hello.png",
//                 {
//                     caption:
// `hello ${username} 😉

// mavjud commandlar:
//  /start | /freebobux | /time | /stock | /sticker | /photos \n | /my` 
//                 }
//             );


//             setTimeout(() => {

//                 bot.sendMessage(
//                     chatID,
//                     "Tanlang",
//                     {
//                         reply_markup:{
//                             keyboard:[
//                                 ["Kino", "anime", "stock", "codes", "Music"]
//                             ],
//                             resize_keyboard:true
//                         }
//                     }
//                 );

//             },3000);


//             break;


//         case "/time":

//             const time = new Date().toLocaleTimeString(
//                 "en-US",
//                 {
//                     timeZone:"Asia/Tashkent",
//                     hour:"2-digit",
//                     minute:"2-digit",
//                     second: "2-digit",
//                     hour12:false
//                 }
//             );

//             await bot.sendMessage(
//                 chatID,
//                 `Hozirgi vaqt ${time}`
//             );

//             break;



//         case "😤":

//             await bot.sendMessage(
//                 chatID,
//                 "🤣"
//             );

//             break;


//         case "salom":

//             await bot.sendMessage(
//                 chatID,
//                 "Salom, menga faqat commandlar orqali murojaat qiling!"
//             );

//             break;


//       case "/stock":

//     try {

//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users/1",
//             {
//                 // headers: {
//                 //     "Content-Type": "application/json",
//                 //     "x-rapidapi-host": "blox-fruit-stock-fruit.p.rapidapi.com",
//                 //     "x-rapidapi-key": process.env.RAPIDAPI_KEY
//                 // }
//             }
//         );

//         const res = await response.json();


//         const stock = res;


        


//         if (!stock || Object.keys(stock).length === 0) {

//             await bot.sendMessage(
//                 chatID,
//                 "🍎 Hozircha stockda hech narsa yo'q 😊"
//             );

//             break;
//         }


//         console.log(stock);


//         await bot.sendMessage(
//             chatID,
//             `🍎 Blox Fruits Stock:\n\n${JSON.stringify(stock, null, 2)}`
//         );


//     } catch (err) {

//         console.log("Stock error:", err.message);


//         await bot.sendMessage(
//             chatID,
//             "❌ Stockni olishda xatolik yuz berdi 😔"
//         );

//     }

// break;


//         default:

//           await bot.sendSticker(chatID,"CAACAgEAAxkBAAIE0Gps4nnWE36Ai6hut3bYPZ3MsY61AAJBAwACDsLwRxThhrV-ovE_PQQ" )         
// // await axios.post(
// //   `https://api.telegram.org/bot${process.env.TOKEN}/sendMessage`,
// //   {
// //     chat_id: chatID,
// //     text: "A",
// //     entities: [
// //       {
// //         offset: 0,
// //         length: 1,
// //         type: "custom_emoji",
// //         custom_emoji_id: "5328145443106873128"
// //       }
// //     ]
// //   }
// // );

//             console.log("Bunday command yo'q:", msg.text);

//             break;


//             case "/sticker":
//                 bot.sendSticker(chatID, 

//                     fs.createReadStream("./stickers/sticker.webp")
//                 )

//                 break;

//                 case "/sybau":
//                     bot.sendPhoto(chatID, "./stickers/sticker.webp")

//                     break;

//                     case "hello": 
//                  await  bot.sendPhoto(chatID, "./pictures/image.png")

//                     break;

//                     case "/photos":
//                       bot.sendMessage(chatID, "codelar",{

//                     reply_markup: {
//                       inline_keyboard: [
//                         [
//                           {
//                               text: "hello",
//                               callback_data: "hello"
//                           },
//                             {
//                               text: "/sybau",
//                               callback_data: "/sybau"
//                            },
//                            {
//                             text: "Raix",
//                             callback_data: "Raix"
//                            },
//                            {
//                           text: "Aizwixx",
//                           callback_data: "aiz"
//                            },
//                         //    {
//                         //     text: "videos",
//                         //     callback_data: "videos"
//                         //    },
//                               {
//                             text: "auratama",
//                             callback_data: "saitama"
//                            }, {
//                             text :"ko't",
//                             callback_data: "ko't"
//                            }
//                        ]
//                     ]
//                   }
//               });
//               break;

//             case "/my":
//   bot.sendMessage(chatID, "Playlaringiz:\n1: WA-WA-WA Funk \n2:Montagem-Derecao(Mega slowed)\n  3: Heavenly_Jumpstyle\n 4: Rise Up\n 5: Andreas Stone With Denniz Jamm - Black Sunrise ",
//     {
//     reply_markup:{
//         inline_keyboard:[
//             [
            
//                 {text: "1", callback_data: "music_1"},
//                 {text: "2", callback_data: "music_2"},
//                 {text: "3", callback_data: "music_3"},
//                 {text: "4", callback_data: "music_4"},
//                 {text: "5", callback_data: "music_5"},

//             ]  
                      
//         ]
//             }
//   })
            
//            break;
         
            
//            case "music_1":
//             await bot.sendAudio(chatID, "",{
//                  reply_markup:{
//         inline_keyboard:[
//             [
            
//                 {text: "A", callback_data: "fav"},

//             ]  
                      
//         ]
//             }
//             })

//             break;
//               case "colette":
//             case "colette❤️":
//                 bot.sendSticker(chatID, "CAACAgIAAxkBAAIE2Gps47RAFIcpsbF-1HmjBSNMFjMCAAIBNAAC8qbxSzwhcaxsD0YYPQQ")
//                 break;

//                 case "qlash":
//                 case "Qlash":
//                     bot.sendSticker(chatID, "CAACAgIAAxkBAAIE8Wps71Aqgb5ljWGf_nj81oR1Fp6OAAItNwACS2EJSR9_jgyLH804PQQ")

//                     break;
//                     case "bot":
//                         bot.sendMessage(chatID, "@AniFilmBot");
//                         break;

                   
              

//                         }

// });


// function sleep(ms){
//     return new Promise(resolve => setTimeout(resolve, ms))
// }



// bot.on("callback_query", async (query)=> {
//     const chatID = query.message.chat.id;

//     if(query.data === "hello"){
//        await  bot.sendPhoto(chatID, "./pictures/image.png")
//     }else if (query.data === "/sybau"){
//         await bot.sendSticker(chatID, "./stickers/sticker.webp")
//     }else if (query.data === "Raix"){
//        await  bot.sendPhoto(chatID, "./pictures/raix.jpg")
//     }
//       else if (query.data === "saitama"){
//         await bot.sendAnimation(chatID, "./gifs/saitama.mp4")
//     } else if(query.data === "ko't"){
//         await bot.sendMediaGroup(chatID, [
//             {
//                 type: "photo",
//                 media: "./pictures/bilol.jpg"
//             },
//             {
//                 type: "photo",
//                 media: "./pictures/kot.png"
//             }
//         ])
//     }else if (query.data === "aiz"){
//       await  bot.sendPhoto(chatID, "AgACAgIAAxkBAAIGHWpuYcpkBWhqObBWA4JEJIm_JMpwAAJuGmsbqrh4S2RjOoE4iCDIAQADAgADeAADPQQ");
//       await sleep(300);
//        bot.sendMessage(chatID, "@KR0V0stok")
//     }

//   switch(query.data){
//     case "music_1":
//      await   bot.sendAudio(chatID,
//             fs.createReadStream("./music/wawawa.m4a")
//         )

//         break;
//          case "music_2":
//      await   bot.sendAudio(chatID,
//             fs.createReadStream("./music/FKU.m4a",{
//                 reply_markup:{
//                     inline_keyboard:[
//                         ["abc"]
//                     ]
//                 }
//             })
//         )

//         break;

//         case "music_3":
//         await    bot.sendAudio(chatID,
               

//                 fs.createReadStream("./music/Heavenly-Jumpstyle.mp3")
//             )

//             break;

//             case "music_4":

//                 await bot.sendAudio(chatID,"CQACAgIAAxkBAAIE_2ptGtxrLTb0hbLe9DvwkZUwvD-xAAJzFQACnW7ISMppybG_KaIyPQQ" )

//            break;

//            case "music_5":
//             await bot.sendAudio(chatID ,  "CQACAgQAAxkBAAIFJGptNVvRORJgTbuy9hCq48NzmWcKAAKDBwACphOpUGcaLIhmyfdtPQQ")
//         }
        
//     });




//     bot.on("message", (msg) => {
//   if (msg.entities) {
//     for (const entity of msg.entities) {
//       if (entity.type === "custom_emoji") {
//         console.log(" emoji ID:", entity.custom_emoji_id);
//       }
//     }
//   }

//   if(msg.sticker){
//     console.log("sticker id:",msg.sticker.file_id);
    
//   }

//   if(msg.audio){
//     console.log("Music id:", msg.audio.file_id, );
//     console.log("Music name:",msg.audio.file_name );
//   };
//   if(msg.video){
//     console.log("Video name:", msg.video.file_name);
//     console.log("Video id:", msg.video.file_id);
    
//   }
//  if(msg.photo){
//     console.log("photo id:", msg.photo[msg.photo.length - 1].file_id);
    
//   }


// });

// console.log(process.uptime());
// async function myCommands () {
//     try{
//  await  bot.setMyCommands([

//   {
//     command: "start",
//     description: "Botni ishga tushirish"
//   },
//   {
//     command: "time",
//     description: "Hozirgi vaqt"
//   },
//   {
//     command: "stock",
//     description: "Stockni ko'rish"
//   },
//   {
//     command: "sticker",
//     description: "Sticker yuborish"
//   },
//   {
//     command: "photos",
//     description: "Rasmlar menyusi"
//   },
//   {
//     command: "my",
//     description: "Musiqalar ro'yxati"
//   },
//   {
//     command: "freebobux",
//     description: "😂 Bepul Bobux"
//   },
//   {
//     command: "kroyxatskibidi",
//     description: "Kino kodlari ro'yxati"
//   },
//   {
//     command: "sybau",
//     description: "Sticker yuborish"
//   }
// ])}catch(error){
//     console.log(error);
    
// }
// };





// bot.onText(/\/stock/, async (msg) => {
//     const chatID = msg.chat.id;
//     if(text === "stock"){
//     try {
//         const { data } = await axios.get("https://blox-fruit-stock-fruit.p.rapidapi.com/");

//         let text = "🍎 Normal Stock\n\n";

//         data.normal.forEach(fruit => {
//             text += `• ${fruit}\n`;
//         });

//         text += "\n✨ Mirage Stock\n\n";

//         data.mirage.forEach(fruit => {
//             text += `• ${fruit}\n`;
//         });

//         await bot.sendMessage(chatID, text);

//     } catch (err) {
//         await bot.sendMessage(chatID, "❌ Stockni olib bo'lmadi.");
//         console.log(err);
//     }}
// });



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



// A simple format!:


// const text = Object.entries(stock).map((item) => {

//         if (typeof item[1] === "object") {

//             return Object.entries(item[1])
//                 .map((item2) => `"${item2[0]}": ${JSON.stringify(item2[1])}`)
//                 .join("\n");

//         }

//         return `"${item[0]}": ${JSON.stringify(item[1])}`;

//     })
//     .join("\n");

// await bot.sendMessage(
//     chatID,
//     `🍎 Blox Fruits Stock:\n\n${text}`
// );





require("dotenv").config();
const telegramBot = require("node-telegram-bot-api").default;
const axios = require("axios");
const { assert, log, trace } = require("console");
const { resolve } = require("dns");
const fs = require("fs");
const { type } = require("os");
const express = require("express");


const app = express();
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Bot is running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const bot = new telegramBot(process.env.TOKEN, {
    polling: true
});


if(!process.env.TOKEN){
    console.log("TOKEN Toplmadi!");
    process.exit();
    
}

// console.log(process.cwd());


const userState = {};

bot.on("message", async (msg) => {

    const chatID = msg.chat.id;
    const text = msg.text?.trim();
    const firstname = msg.from.first_name; 
    const username = msg.from.username
  
    console.log("Kelgan text:", text);



  if(text ==="/freebobux"){
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

         await  bot.sendMessage(chatID, ` Bor musiclar: \n1: WA-WA-WA Funk \n2:Montagem-Derecao(Mega slowed)\n  3: Heavenly_Jumpstyle\n 4:Rise up\n 5: Andreas Stone With Denniz Jamm - Black Sunrise\n 6: Dive `,

             {
               parse_mode: "HTML",
               reply_markup:{
                    inline_keyboard:[
                        [
                             {text: "1", callback_data: "music_1"},
                             {text: "2", callback_data: "music_2"},
                             {text: "3", callback_data: "music_3"},
                             {text: "4", callback_data: "music_4"},
                             {text: "5", callback_data: "music_5"},
                             {text: "6", callback_data: "music_6"}
                            
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
                "Mavjud kodlar ro'yxati: /kroyxatskibidi"
            );

            break;

            case "nomi orqali": 

            await bot.sendMessage(chatID, "Kino nomini kiriting...")

          break;
        case "/kroyxatskibidi":

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
`hello ${firstname} 😉

mavjud commandlar:
 /start | /freebobux | /time | /stock | /sticker | /photos \n | /my` 
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

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {
                // headers: {
                //     "Content-Type": "application/json",
                //     "x-rapidapi-host": "blox-fruit-stock-fruit.p.rapidapi.com",
                //     "x-rapidapi-key": process.env.RAPIDAPI_KEY
                // }
            }
        );

        const res = await response.json();


        const stock = res;


        


        if (!stock || Object.keys(stock).length === 0) {

            await bot.sendMessage(
                chatID,
                "🍎 Hozircha stockda hech narsa yo'q 😊"
            );

            break;
        }


        console.log(stock);


        await bot.sendMessage(
            chatID,
            `🍎 Blox Fruits Stock:\n\n${JSON.stringify(stock, null, 2)}`
        );


    } catch (err) {

        console.log("Stock error:", err.message);


        await bot.sendMessage(
            chatID,
            "❌ Stockni olishda xatolik yuz berdi 😔"
        );

    }

break;

 case "/cringe":
 console.log(username);
 
 if(username === "Motiondibob"){
     bot.sendMessage(chatID, "🦝 Hello!");
     return;
    }
    bot.sendMessage(chatID, "Sorry you can't use this command , this command avieable only for @Motiondibob")
    bot.sendMessage(chatID, "or you can enter the pass key to use this command!", {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: "Okay✅", callback_data: "cringe_okay"},
                    {text: "Okay❌", callback_data: "cringe_cancel"}


                ]
            ]
        }
    });



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
                           {
                          text: "Aizwixx",
                          callback_data: "aiz"
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
 bot.sendMessage(chatID, "Playlaringiz:\n1: WA-WA-WA Funk \n2:Montagem-Derecao(Mega slowed)\n  3: Heavenly_Jumpstyle\n 4: Rise Up\n 5: Andreas Stone With Denniz Jamm - Black Sunrise\n 6: Dive ",
    {
    reply_markup:{
        inline_keyboard:[
            [
            
                {text: "1", callback_data: "music_1"},
                {text: "2", callback_data: "music_2"},
                {text: "3", callback_data: "music_3"},
                {text: "4", callback_data: "music_4"},
                {text: "5", callback_data: "music_5"},
                {text: "6", callback_data: "music_6"},

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
                    case "bot":
                        bot.sendMessage(chatID, "@AniFilmBot");
                        break;

                   

                        }

});


function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}



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
                    bot.sendMessage(chatID, "Waiting for the pass key...");
                    if(query === "12312318"){
                        bot.sendAudio(chatID, "CQACAgEAAxkBAAIH-GqGQnRm89PSSIfZV0lZ0QJPb6UbAAJ2BAAC7I_hR7VtBwfMZ4L_PQQ" )
                    }
       break;
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
 if(msg.photo){
    console.log("photo id:", msg.photo[msg.photo.length - 1].file_id);
    
  }


});

console.log(process.uptime());

async function myCommands () {
    try{
 await  bot.setMyCommands([

  {
    command: "start",
    description: "Botni ishga tushirish"
  },
  {
    command: "time",
    description: "Hozirgi vaqt"
  },
  {
    command: "stock",
    description: "Stockni ko'rish"
  },
  {
    command: "sticker",
    description: "Sticker yuborish"
  },
  {
    command: "photos",
    description: "Rasmlar menyusi"
  },
  {
    command: "my",
    description: "Musiqalar ro'yxati"
  },
  {
    command: "freebobux",
    description: "😂 Bepul Bobux"
  },
  {
    command: "kroyxatskibidi",
    description: "Kino kodlari ro'yxati"
  },
  {
    command: "sybau",
    description: "Sticker yuborish"
  }, {
    command: "cringe",
    description: "cringes"
  },
])}catch(error){
    console.log(error);
    
}
};


myCommands();