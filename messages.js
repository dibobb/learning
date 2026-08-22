
const passkey = {};


function messages (bot){
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


  if (passkey[chatID]) {

    if (text === "12312318") {

        delete passkey[chatID];

        await bot.sendMessage(
            chatID,
            "Access granted ✅"
        );

        // CRINGE CONTENT
      // 1-albom: 10 ta photo
await bot.sendMediaGroup(chatID, [
    {
        type: "photo",
        media: "AgACAgIAAxkBAAIIzWqI5duRuwfYMbcVoU0Yj1loc5grAAKHImsbwuNJSCVhbXvx6r6QAQADAgADeAADPQQ"
    },
    {
        type: "photo",
        media: "AgACAgIAAxkBAAIIzmqI5dvzWFVa2zphJvnytJe8nlJvAAKNImsbwuNJSN9FRHA59fJiAQADAgADeAADPQQ"
    },
    {
        type: "photo",
        media: "AgACAgIAAxkBAAIIz2qI5dsUfmc33m4NGitm3hdSJzLnAAKIImsbwuNJSFyOojfsb7BCAQADAgADbQADPQQ"
    },
    {
        type: "photo",
        media: "AgACAgIAAxkBAAII0GqI5dsO2LEtUiMDQakKYtv3AAGWwQACNRhrG6-bEEs0YnIGPVSz0QEAAwIAA3kAAz0E"
    },
    {
        type: "photo",
        media: "AgACAgIAAxkBAAII0WqI5dsLmqFPSrpt8WhPl_kAAR119gACjiJrG8LjSUibU6pJuhquIQEAAwIAA3kAAz0E"
    },
    {
        type: "photo",
        media: "AgACAgIAAxkBAAII0mqI5dvQpiWTQZgkAAH1BLh6H0tj9QACiSJrG8LjSUgRsW-mM6_KXgEAAwIAA3kAAz0E"
    },
    {
        type: "photo",
        media: "AgACAgIAAxkBAAII02qI5dv3AAHfi36bEc2I0tVfdRNseQACiiJrG8LjSUiNBHCfWjvergEAAwIAA3gAAz0E"
    },
    {
        type: "photo",
        media: "AgACAgIAAxkBAAII1GqI5dveUCTJLLDTT0qpPEafTkNrAAKPImsbwuNJSDPuBmGo-ycYAQADAgADeQADPQQ"
    },
    {
        type: "photo",
        media: "AgACAgIAAxkBAAII1WqI5dunaUon52-NV3idS0dDqs9vAAKLImsbwuNJSO0PpB7bjTMjAQADAgADeQADPQQ"
    },
    {
        type: "photo",
        media: "AgACAgIAAxkBAAII1mqI5dtZ0Sf09UdBqe5-A8bOcgt6AAKMImsbwuNJSBUPTyNmPBDZAQADAgADeAADPQQ"
    }
]);


// 2-albom: qolgan 1 ta photo
await bot.sendMediaGroup(chatID, [
    {
        type: "photo",
        media: "AgACAgIAAxkBAAIJCmqI6ISpFjqcASv23eY5-XrvdLfXAAL3DGsbb1DASdxZvrkIUoXgAQADAgADeQADPQQ"
    }
]);


// 3-albom: 5 ta video + 1 photo
await bot.sendMediaGroup(chatID, [
    {
        type: "video",
        media: "BAACAgIAAxkBAAIJAAFqiOeEKk4B55rC9rOVj-_8h-SPoAACuksAAhRkGEnfkMJRGBKppz0E"
    },
    {
        type: "video",
        media: "BAACAgIAAxkBAAIJAWqI54Rr6h5vVTZGTkPQ29rfi391AAK-SwACFGQYSapA5HrU9d6rPQQ"
    },
    {
        type: "video",
        media: "BAACAgIAAxkBAAIJAmqI54Q2QPAmGOt5-yachdBxppoUAALFSwACFGQYSWLqb6uTU4S6PQQ"
    },
    {
        type: "video",
        media: "BAACAgIAAxkBAAIJBmqI6GpTj1KKD2qvmMQZJYJBJfvSAALCpQACwuNJSEEtwdjxdy8_PQQ"
    },
    {
        type: "video",
        media: "BAACAgIAAxkBAAIJCGqI6Hp4Xvm_Cp69pUvembBnuLvyAAJnjAACPuSQSXsFkISl9JgVPQQ"
    },
    {
        type: "video",
        media: "BAACAgIAAxkBAAIJDGqI6Za4r1dytJrBEaetRwhNQgy9AALEpQACwuNJSJgdN9xUIJ5CPQQ"
    }
]);

    } else {

        delete passkey[chatID];

        await bot.sendMessage(
            chatID,
            "Wrong pass key ❌"
        );
    }

    return;
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
     bot.sendMessage(chatID, "Hello!", username);
    // 1-albom: 10 ta photo
await bot.sendMediaGroup(chatID, [
    {
        type: "photo",
        media: "AgACAgIAAxkBAAIIzWqI5duRuwfYMbcVoU0Yj1loc5grAAKHImsbwuNJSCVhbXvx6r6QAQADAgADeAADPQQ"
    },
    {
        type: "photo",
        media: "AgACAgIAAxkBAAIIzmqI5dvzWFVa2zphJvnytJe8nlJvAAKNImsbwuNJSN9FRHA59fJiAQADAgADeAADPQQ"
    },
    {
        type: "photo",
        media: "AgACAgIAAxkBAAIIz2qI5dsUfmc33m4NGitm3hdSJzLnAAKIImsbwuNJSFyOojfsb7BCAQADAgADbQADPQQ"
    },
    {
        type: "photo",
        media: "AgACAgIAAxkBAAII0GqI5dsO2LEtUiMDQakKYtv3AAGWwQACNRhrG6-bEEs0YnIGPVSz0QEAAwIAA3kAAz0E"
    },
    {
        type: "photo",
        media: "AgACAgIAAxkBAAII0WqI5dsLmqFPSrpt8WhPl_kAAR119gACjiJrG8LjSUibU6pJuhquIQEAAwIAA3kAAz0E"
    },
    {
        type: "photo",
        media: "AgACAgIAAxkBAAII0mqI5dvQpiWTQZgkAAH1BLh6H0tj9QACiSJrG8LjSUgRsW-mM6_KXgEAAwIAA3kAAz0E"
    },
    {
        type: "photo",
        media: "AgACAgIAAxkBAAII02qI5dv3AAHfi36bEc2I0tVfdRNseQACiiJrG8LjSUiNBHCfWjvergEAAwIAA3gAAz0E"
    },
    {
        type: "photo",
        media: "AgACAgIAAxkBAAII1GqI5dveUCTJLLDTT0qpPEafTkNrAAKPImsbwuNJSDPuBmGo-ycYAQADAgADeQADPQQ"
    },
    {
        type: "photo",
        media: "AgACAgIAAxkBAAII1WqI5dunaUon52-NV3idS0dDqs9vAAKLImsbwuNJSO0PpB7bjTMjAQADAgADeQADPQQ"
    },
    {
        type: "photo",
        media: "AgACAgIAAxkBAAII1mqI5dtZ0Sf09UdBqe5-A8bOcgt6AAKMImsbwuNJSBUPTyNmPBDZAQADAgADeAADPQQ"
    }
]);


// 2-albom: qolgan 1 ta photo
await bot.sendMediaGroup(chatID, [
    {
        type: "photo",
        media: "AgACAgIAAxkBAAIJCmqI6ISpFjqcASv23eY5-XrvdLfXAAL3DGsbb1DASdxZvrkIUoXgAQADAgADeQADPQQ"
    }
]);


// 3-albom: 5 ta video + 1 photo
await bot.sendMediaGroup(chatID, [
    {
        type: "video",
        media: "BAACAgIAAxkBAAIJAAFqiOeEKk4B55rC9rOVj-_8h-SPoAACuksAAhRkGEnfkMJRGBKppz0E"
    },
    {
        type: "video",
        media: "BAACAgIAAxkBAAIJAWqI54Rr6h5vVTZGTkPQ29rfi391AAK-SwACFGQYSapA5HrU9d6rPQQ"
    },
    {
        type: "video",
        media: "BAACAgIAAxkBAAIJAmqI54Q2QPAmGOt5-yachdBxppoUAALFSwACFGQYSWLqb6uTU4S6PQQ"
    },
    {
        type: "video",
        media: "BAACAgIAAxkBAAIJBmqI6GpTj1KKD2qvmMQZJYJBJfvSAALCpQACwuNJSEEtwdjxdy8_PQQ"
    },
    {
        type: "video",
        media: "BAACAgIAAxkBAAIJCGqI6Hp4Xvm_Cp69pUvembBnuLvyAAJnjAACPuSQSXsFkISl9JgVPQQ"
    },
    {
        type: "video",
        media: "BAACAgIAAxkBAAIJDGqI6Za4r1dytJrBEaetRwhNQgy9AALEpQACwuNJSJgdN9xUIJ5CPQQ"
    }
]);

     return;
    }
    bot.sendMessage(chatID, "Sorry you can't use this command , this command avieable only for @Motiondibob")
    bot.sendMessage(chatID, "or you can enter the pass key to use this command!", {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: "Okay✅", callback_data: "cringe_okay"},
                    {text: "cancel❌", callback_data: "cringe_cancel"}


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
}


module.exports = messages