module.exports = {
  kod: "günlükzoom",
  async run (client, message, args) {
    const saat = args[0]
    if (!saat) return message.reply('Saati belirtiniz!')
    const aktivite1 = message.content.split(' ').slice(2)
    const aktivite = aktivite1.join(" ")
    if (!aktivite) return message.reply('Aktiviteyi belirtmelisiniz!')
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setTitle('Yeni Toplantı Planlandı!')
    .setColor("WHITE")
    .addField('Saat:',  `${saat}`)
    .addField(`Aktivite Ve Not:`,  `${aktivite}`)
    .setFooter(message.author.tag)
    .setImage('https://cdn.discordapp.com/attachments/809304779150065664/827921649147969546/74925422.jpg');
    message.channel.send(embed)
  }
}
