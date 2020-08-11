const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
client.queue = new Map();
const fs = require("fs");
const db = require("quick.db");
const moment = require("moment");
require("./util/eventLoader")(client);

///////////
const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
///////////

client.on('guildMemberAdd', async member => {
  
  let tag = await db.fetch(`tag_${member.guild.id}`);
  let tagyazi;
  if (tag == null) tagyazi = member.setNickname(`${member.user.username}`)
  else tagyazi = member.setNickname(`${tag} | ${member.user.username}`)
});
var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

////////////////////////

client.on("message", async message => {
  if (message.content === "gir") {
    client.emit(
      "guildMemberAdd",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});
client.on("message", async message => {
  if (message.content === "çık") {
    client.emit(
      "guildMemberRemove",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token);

/////////////////////////////////////
///////////////////////////////////////////////////



///////////////////////////////////////////////////

/////////////////////////////////////////////////////

client.on("guildMemberAdd", (member, message) => {
  if (member.guild.id !== "728683202625011813") return; //sunucu ıd
  let aylartoplam = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
  };
  let aylar = aylartoplam;
  let user = client.users.get(member.id);
  require("moment-duration-format");
  let eskiNick = member.user.username;
  const id = "734735656269512765"; //kanal ıd
  const channel = member.guild.channels.get(id);
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gün = moment.duration(kurulus).format("D");
  var kontrol;
  if (gün < 7) kontrol = "FAKE ÜYE!";
  if (gün > 7) kontrol = "Güvenilir Kullanıcı!";
  channel.send(
    `<a:valeria_slm:734755725183680512> **Hoşgeldin **${member}** seninle** **${
    member.guild.members.size
    }** **kişiyiz!**  <a:valeria_kalp20:734759273896083487>\n\n<a:valeria_kalp21:734759243294703738>  **Kaydının yapılması için ismini ve yaşını yazman gerekli.** <a:valeria_kalp20:734759273896083487>\n\n<a:valeria_kalpkedi:734759243613470811>  **Hesap Kuruluş Zamanı:** **${moment(
      user.createdAt
    ).format("DD")} ${aylar[moment(user.createdAt).format("MM")]} ${moment(
      user.createdAt
    ).format(
      "YYYY HH:mm:ss"
    )}**  <a:valeria_kalp20:734759273896083487>\n\n<a:valeria_sasiran:734759245647446077> **Bu Kullanıcı:** **${kontrol}** <a:valeria_kalp20:734759273896083487>\n\n<a:valeria_cikti:734755714660040718> **<@&734735660262490154>** **Rolündeki yetkililer seninle ilgilenecektir.** <a:valeria_kalp20:734759273896083487>`,
   { 
       file:"https://cdn.discordapp.com/attachments/458912291803627531/738755896724815882/ScornfulShrillHorsemouse-size_restricted.gif"
   }
  );
})
//////////////////////////////////////////////////////

client.on("guildMemberAdd", member => {
  var moment = require("moment")
  require("moment-duration-format")
  moment.locale("tr")
   var {Permissions} = require('discord.js');
   var x = moment(member.user.createdAt).add(7, 'days').fromNow()
   var user = member.user
   x = x.replace("Birkaç Saniye Önce", " ")
   if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
   var rol = member.guild.roles.get("734735662573682771")
   var kayıtsız = member.guild.roles.get("734735670236545064")
   member.addRole(rol)
member.user.send('Hesabınız 7 Günden Önce Açıldığı İçin Otomatik Olarak Cezalıya Atıldınız, Yetkililere Bildirerek Açtırabilirsiniz Ayrıca Unutmayın Her Şey Siz Değerli Üyelerimizin Güvenliği İçin.')
setTimeout(() => {

        member.removeRole(kayıtsız.id);

}, 1000)


    
   }
        else {

        }  
    });


 client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.sendMessage('Aleyküm Selam Bebeğim Hoşgeldin <a:valeria_pikacudance:734755655906492436>');
  }
});
//////////////////////////////// //// //// ////////////////////////////////////////////////////////////////////


//dcs ekibi
client.on('ready', ()=>{
client.channels.get('737947636384137247').join()
})


client.on("userUpdate", async(oldCAD, newCAD, updated) => {


    
  if(oldCAD.avatarURL === newCAD.avatarURL) return;
  let cadNORMAL = "734735664683417632"; // Normal PP'lerin Atılacağı Kanal ID'si
  let cadGIF = "734735664683417632"; // Gif PP'lerin Atılacağı Kanal ID'si
  let cadPP = (newCAD.avatarURL).split("?")[0];
  if((cadPP).endsWith(".gif")) {
    client.channels.get(cadGIF).send(new Discord.Attachment(cadPP));
  } else {
    client.channels.get(cadNORMAL).send(new Discord.Attachment(cadPP));
  };
});


//////////////////////////////// //// //// ////////////////////////////////////////////////////////////////////




client.on('guildMemberAdd', (member) => {
let kontrol_dcs = member.user.username.split("")
var logdcs = member.guild.channels.find('id' , '734837112066670723')
var dcsisim = '☿ | İsim Yaş' //Burası kullanıcını ismi bozuksa ne yapsın ismini
if(!logdcs) return

const dcsembed = new Discord.RichEmbed()
.addField('BOZUK NİCK BULUNDU!' , member)
.setThumbnail(member.user.displayAvatarURL)
.addField('ESKİ AD' , member.user.tag.substring(0,7) +`...` , true)
.addField('AYARLANAN AD' , dcsisim, true)
.setColor('RANDOM')
logdcs.send(dcsembed)//dcs ekibi

if (!dcsharfler('a', 'z').some(harfdcs => kontrol_dcs.includes(harfdcs))) {
member.setNickname(dcsisim)
} else {
return;
}
  
function dcsharfler(charA, charZ) {
let fc = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
for (; i <= j; ++i) {
fc.push(String.fromCharCode(i))
}
return fc;//dcs
}
});






client.on("message", async message => {
  if(message.author.id === client.user.id) return;
  if(message.guild) return;
 //DCS 
client.channels.get('737318255441608898').send(new Discord.RichEmbed().setAuthor('Yeni DM!').setFooter('DM-LOG SİSTEMİ!').setDescription(`Gönderen kişi:   ${message.author.tag}`).setTimestamp().setThumbnail(client.user.avatarURL).addField("Mesajı;",
message.content).setColor("GOLD"))//DCS!
})



