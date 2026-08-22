function id (bot){

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

}


module.exports = id