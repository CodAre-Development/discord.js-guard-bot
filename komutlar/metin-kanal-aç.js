const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kanal = args.slice(0).join(' ');
    let guild = message.guild;
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Bunun için gerekli iznin yok'); // Bunu Başkasıda Kullana Bilmesi İçin Kanalları Yönet Yetkisi Verin
    if (kanal.length < 1) return message.reply('Lütfen oluşturacağım kanalın adını yaz.');
  message.delete();
  guild.createChannel(kanal, 'text');
  message.channel.send("Metin Kanalı Oluşturuldu");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazı-kanal-aç'],
  permLevel: 0
};

exports.help = {
  name: 'metin-kanal-aç',
  description: 'Bir ses kanalı açar',
  usage: 'ses-kanal-aç [açmak istediğiniz kanalın adı]'
};