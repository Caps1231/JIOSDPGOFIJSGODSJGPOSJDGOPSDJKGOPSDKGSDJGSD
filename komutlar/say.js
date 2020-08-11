const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;

const fs = require('fs');
let yazı = JSON.parse(fs.readFileSync("./ayarlar.json", "utf8"));
exports.run =async (client , message, args) => {

     let onlineUsers1 = message.guild.members.filter(m => m .voiceChannel).size;
 let onlineUsers2 = message.guild.members.filter(m => m.user.username.includes("☿")).size;
      let embed = new Discord.RichEmbed()
    .setColor("#087eb0")
    .setDescription("<a:valeria_elmas:734755710121803812> Sunucuda Toplam **`"+message.guild.memberCount+"`** Üye Bulunmaktadır.\n\n<a:valeria_elmas:734755710121803812> Toplam Taglı **`"+onlineUsers2+"`** Üye Bulunmaktadır.\n\n<a:valeria_elmas:734755710121803812>  Seste Toplam **`"+onlineUsers1+"`** Üye Bulunmaktadır.")
      message.channel.send(embed)
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'Komutlar hakkında bilgi verir.',
  usage: '&yardım'
};