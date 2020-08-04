const Discord = require('discord.js')
const loglar = require('../loglar.json')

exports.run = (client, message, args) => {
	try {
		const embed = new Discord.RichEmbed()
			.addField(`Sunucuda Bulunan Roller`, message.guild.roles.filter(r => r.name !== "@everyone").map(r => r).join(' | '))
			.setColor(0x00ffff)
			.setTimestamp()
		message.channel.send({embed})
	} catch (err) {
		const embed = new Discord.RichEmbed()
			.addField(`Sunucuda Bulunan Roller`, 'Üzgünüm ama sunucunuzda ya çok fazla rol bulunuyor ya da hiç rol bulunmuyor. Bunları gösteremiyorum. Discord buna izin vermiyor.')
			.setColor(0x00ffff)
			.setTimestamp()
		message.channel.send({embed})
	}
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['roles'],
	permLevel: 0,
	kategori: 'kullanıcı'
}

exports.help = {
	name: 'roller',
	description: 'Sunucuda bulunan rolleri gösterir.',
	usage: 'roller'
}