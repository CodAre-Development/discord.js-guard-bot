
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

const prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`:warning: Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`)
  
  let modlogs = db.get(`modlogkanaly_${message.guild.id}`)
  
  if(!modlogs) {
    let kanal = message.mentions.channels.first();
    if(!kanal) return message.reply(`:warning: Lütfen bir kanal giriniz! \nDoğru Kullanım; \`${prefix}modlogayarla <#kanal>\``)

    db.set(`modlogkanaly_${message.guild.id}`, kanal.id)
    const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);
    message.channel.send(`:white_check_mark: Modlog kanalı başarılı bir şekilde ayarlandı.`)
    
    } else {
      if(modlogs) {
        
        const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);
        return message.channel.send(`:warning: Bu sunucuda daha önceden modlog kanalı ayarlanmış. Sıfırlamak için: ${prefix}modlogayarla-sıfırla\nAyarlanan kanal: \`${modlogkanal.name}\``)
        
      }
    }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log'],
    permLevel: 0
}

exports.help = {
    name: 'modlogayarla',
    description: 'Log kanalını belirler.',
    usage: 'gkanal <#kanal>'
}