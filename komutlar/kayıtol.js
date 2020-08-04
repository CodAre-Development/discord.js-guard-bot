const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = function(client, message, args) {
  
  let k = client.channels.get("BURAYA İD GELECEK")   //LOG KANALI İD SİNİ YAZ
  let misafir = message.guild.roles.get("BURAYA İD GELECEK")  //ALINACAK ROL İD SİNİ YAZ
  let üye = message.guild.roles.get("BURAYA İD GELECEK")     //VERİLECEK ROL İD
  let kayıtkanal = message.guild.channels.find(`id`, `BURAYA İD GELECEK`)   //KAYITIN OLUNACAĞI KANAL İD
   

    let yaş = args[0];
      if (!yaş) return message.reply("yaşını yazmadı.")

    let isim = args[1];
      if (!isim) return message.reply("ismini yazmadın.")

    message.member.addRole(üye)
    message.member.removeRole(misafir)    
    message.member.setNickname(yaş + " | " + isim)

  const e = new Discord.RichEmbed()
  .setTitle("Kayıt Bildiri")
  .addField("Kullanıcı", message.author.tag)
  .addField("Kullanıcı (ID)", message.author.id)
  .addField("Yaş", yaş)
  k.send(e)
  
}

exports.conf = {

    enabled: true,
    guildOnly: true,
    aliases: ["kayıt"],
    permLevel: 0
};

exports.help = {
    name: "isimyaş",
    description: "s",
    usage: "kayıt <yaş> <isim>"
};