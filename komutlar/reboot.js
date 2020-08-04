const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("**Bot Yeniden Başlatıldı**").then(msg => {
        process.exit(0);
    });

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['rr','restart'],
  permLevel: 3
};

exports.help = {
  name: 'reboot', 
  description: 'Botu yeniden başlatır',
  usage: 'reboot'
};
