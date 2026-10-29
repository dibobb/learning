
 async function menu (bot){
    const result = await bot.setChatMenuButton({

     menu_button:{
        type: "web_app",
        text:"Open",
        web_app:{
            url:"https://youtube.com"
        }
     }
    })
}


module.exports = menu