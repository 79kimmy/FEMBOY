const Discord = require('discord.js');
const client = new Discord.Client(); //discord client to connect to discord server
const Database = require("@replit/database")
const db = new Database()

const mySecret = process.env['TOKEN']


//random function
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//client responds to ready event (successfully logged into the discord server)
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
  //if the author of a message is a bot, do not interact
  if (message.author.bot){ return;}

  //uwu or owo
  toLower = message.content.toLowerCase();

  // if(toLower){
  //   if(message.content.length === 3 && (toLower[0] == toLower[2])){
  //     const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'AYAYA');
  //     message.react(reactionEmoji);
  //   }
  // }

  if((toLower == 'uwu' || toLower.includes('uwu')) || (toLower == 'owo' || toLower.includes('owo'))){
    const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'AYAYA');
      message.react(reactionEmoji);
  }

  //help
  if(message.content === "!help"){
    message.reply("\n\nCommands:\n!bang\n!coin\n!doin\n!greece\n!learn\n!mental\n!mc\n!roll\n!sneed\n!t");
  }

  //kick if no message from user for three days after joining
  //poll
  //5 kekw's then pin
  //time, time zone by country
  //crypto ticker
  //urban dictionary definition
  //currency converter
  //moderator add new command, !newcommand <command name> <command text>
  //pfp with args

  //bang
  if(message.content === "!bang"){
    const embed = new Discord.MessageAttachment('./fat.png');
    message.channel.send(embed).catch(console.error).then(embed =>
    message.channel.send("*BANG BANG*\n>CAM ON INGERLAND\n*BANG BANG*\n>SCOR SOM FACKIN GOALS\n*BANG BANG*")
    )
  }

  //coin flip
  if(message.content === "!coin"){
    const coin = getRandomInt(2);
    if(coin === 0){
      message.reply("HEADS");
    }
    else{
      message.reply("TAILS");
    }
  }

    //degenerate coin flip
  if(message.content === "!doin"){
    const coin = getRandomInt(3);
    if(coin === 0){
      message.reply("degenerate");
    }
    else if(coin ===1){
      message.reply("fun");
    }
    else{
      message.reply("responsible");
    }
  }

  //greece
  if(message.content === '!greece'){
    message.channel.send('ALBANIA :heart: :heart: :heart: GREECE HAHAHAHHAHA :laughing: :laughing: GREECE VS TURKEY FROM TURKEY');
  }

  //learn
  if(message.content === "!learn"){
    message.reply("https://79kimmy.github.io/python/");
  }

    //mental
  if(message.content === "!mental"){
      message.reply("\n\nMental Stability (according to Kiara):\nAri\nSpirit\nHODL\nkaneru\ngluehuffer4000\nIsonzo (for now)\nably\nSaya\nAlen\nHydrogen Fox\nKiara\nkimmy\nthemuster420\nmal\nsure");
  }

  //minecraft
  if(message.content === "!mc"){
      message.reply("\nKira's Server Address: https://k1ra.net/\n\nKiara's Mods: <https://mega.nz/file/KjpzDKoS#Kpq-v-ft6Xa1jngxo7i7Mlcc_5i-jBEkmo0fWWQIUVM>\nKiara's Server Address: yuuko.kyoko.pw:31210");
  }

  //roll
  if(message.content === "!roll"){
    const coin = Math.floor(Math.random()*10000);
    message.reply(coin);
  }

   //sneedrun
  if(message.content === "!sneed"){
      message.reply("\n1. Kiara - 0:37\n2. Alen - 1:12\n3. Isonzo - 1:45\n4. kimmy - 2:06\n5. themuster420 - 2:36");
  }

   //testosterone
  if(message.content === "!t"){
      message.reply("\n\nTestosterone Count (according to Kiara):\nHODL\nAlen\nsure\nably\nIsonzo\nAri\nキラ\nthemuster420\nKiara\nSaya\nSpirit\nkaneru\nkimmy\nmal\nnull\n");
  }
});

client.login(mySecret);
