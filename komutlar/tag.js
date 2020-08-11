const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => { 

const sad = "**Tagımızı almak ister misin bebeğim ?**"
const tag = "☿"
message.channel.send(sad)
message.channel.send(tag)


}
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['discorol'], 
  permLevel: 0
};

exports.help = {
 name: 'tag' ,
};