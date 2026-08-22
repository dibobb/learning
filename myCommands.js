
async function myCommands (bot) {
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
  },{
    command: "bot",
    description: "bot"
  },{
    command: "thing",
    description: "a thing"
  },
])}catch(error){
    console.log(error);
    
}
};


module.exports = myCommands