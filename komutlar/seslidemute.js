const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (client, message, args) => {
  const rol = message.guild.roles.get("728683202750840839");
  const roll = rol.id;
  if (!message.member.roles.has(roll))
    return message.reply("Bu Komutu Kullana Bilmek için Yetkili Olman Gerek!");

  const uye = message.mentions.members.first();
  if (!uye)
    return message.reply(
      "Bir Üye Etiketlemelisin!\nÖrnek: !mute <user> <süre> <reason>"
    );

  const sure = args[1]; //Made in DCS Please Again 
  if (!sure)
    return message.reply(
      "Süre Yazmalısın!\nÖrnek: !mute <user> <süre> <reason>"
    );

  const sebep = args.slice(2).join(" ");
  if (!sebep)
    return message.reply("Bir Sebep Yaz!\nÖrnek: !mute <user> <süre> <reason>");

  let log = "693195884183158784";

  if (!uye.voiceChannel)
    return message.reply("Belirttiğin Kişi Zaten Ses Kanalına Bağlı Değil Ki?");

  uye.setMute(true);
  message.channel.send(
    `**İşlem Başarılı! \`${uye.displayName}\` İsimli Kullanıcı \`${sure}\` Dakika Sesli Odada Susturuldu!**`
  );

  const l = message.guild.channels.get(log);

  l.send(
    `\`${uye.displayName}\` İsimli Kullanıcı Sesli Kanalda \`${sure}\` Dakika Susturuldu!\nSebep: \`${sebep}\``
  );
  setTimeout(() => {
    uye.setMute(false);
    message.channel.send(`<@${uye.id}> Seslideki Susturulma Süren Sona Erdi!`);

    l.send(`${uye.displayName} İsimli Kullanıcının Ses Mutesi Sona Erdi!`);
  }, ms(sure));
};

exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "seslimute"
};
   