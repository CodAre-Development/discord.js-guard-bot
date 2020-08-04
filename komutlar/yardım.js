const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» Komutlar')
.setTimestamp()
.addField('» Kendin Doldur ')
.addField('» Kendin Doldur')
.addField('» Kendin Doldur')
.addField('» Kendin Doldur ')
.addField('» Kendin Doldur')// daha da eklemek için .addField('yazacağın sey') diye alt alta ekle
.setFooter('Botun Ismi', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};