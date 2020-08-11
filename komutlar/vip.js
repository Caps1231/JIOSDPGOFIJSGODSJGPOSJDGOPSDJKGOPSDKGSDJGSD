const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")
var prefix = ayarlar.prefix;
const fs = require('fs');
let yazı = JSON.parse(fs.readFileSync("./ayarlar.json", "utf8"));
exports.run = async (client, message, args) => {
  if(message.author.bot || message.channel.type === "dm") return;
  if(!message.member.roles.get("734735658249355274") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Bu Komutu Kullanmaya Yetkin Yok!!").then(m => m.delete(5000));

  
  var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  var Sevgilimvar  = message.guild.roles.get("734735661470318643")
  
if(!user) return message.reply ("Lütfen bir kullanıcı etiketleyiniz").then(m => m.delete(5000));

  
        if(!Sevgilimvar) return message.channel.send ("Sevgilimvar Rolü Yok").then(m => m.delete(5000));


  if(!user.roles.has(Sevgilimvar.id)){
  
    await (user.addRole(Sevgilimvar.id))
    
  
   message.react('✅')
    let embed = new Discord.RichEmbed()
    .setColor(Sevgilimvar.color)
    .setDescription(`${user.user} Kullanıcısına <@&${Sevgilimvar.id}> Rolü Verildi.`)
    .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL}`)
  .setTimestamp()  
    message.channel.send(embed)



  }
  else {
    
    await (user.removeRole(Sevgilimvar.id));
    
 

    
    message.react('✅')
     let embed0= new Discord.RichEmbed()
    .setColor(Sevgilimvar.color)
    .setDescription(`${user.user} Kullanıcısına <@&${Sevgilimvar.id}> Rolü Alındı.`)
   .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL}`)
  .setTimestamp()  
    message.channel.send(embed0)

    
  }
 
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'special',
  description: 'designer rolü verir.',
  usage: 'a!designer'
};
 
