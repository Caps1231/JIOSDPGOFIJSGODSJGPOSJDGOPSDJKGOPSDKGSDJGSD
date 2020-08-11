
const Discord = require('discord.js');
const db = require('quick.db')
module.exports.run = async (bot, message, args, member, client, level) => {
  if(!message.member.roles.has("734735660262490154")) return message.channel.send(`Hata ! Yeterli Yetkin Yok !`);
const isim = args[1]
if(!isim)
return message.reply("Bir Isim Gir Örnek: `!kadın <@KİŞİ> <isim> <yaş>`")
const yaş = args[2]
if(!yaş)
return message.reply("Bir Yaş Gir Örnek: `!kadın <@KİŞİ> <isim> <yaş>`")
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!user) return message.reply("**Etiket Atmayı Unuttun!**");
  user.addRole('734735664578428948')
  user.addRole('734735664930619463')
  user.removeRole('734735670236545064')
const ky = new Discord.RichEmbed()
        .setThumbnail(user.user.avatarURL)
        .setDescription(`**<a:valeria_Sag:736575317669445683> Kayıt Edilen Kullanıcı : ${user} \n<a:valeria_Sag:736575317669445683> Kayıt Eden Yetkili : @${message.author.username} \n<a:valeria_Sag:736575317669445683> Kayıt İşleminde Verilen Rol : <@&734735664578428948> <@&734735664930619463> \n<a:valeria_Sag:736575317669445683> Yeni Kullanıcı Adı : \`${user.displayName} \n<a:valeria_Sag:736575317669445683> Alınan Rol : <@&734735670236545064>**`)
        .setColor('#05011d')
        .setTimestamp()
        message.channel.send(ky)
  user.setNickname("☿  | " + isim + " " + yaş)
} 
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["erkek" , "e"],
    permLevel: 0
}
exports.help = {
    name: 'erkek',
    description: 'kayıt',
    usage: 'kayıt'
}