const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {


const embed = new Discord.MessageEmbed()
.setColor("RED")
.setAuthor("PYRO")
.setDescription(`**Şuan Pingim: ${Math.round(message.client.ws.ping)} MS**`)
.setImage("https://cdn.discordapp.com/attachments/976882385759109174/977479415896371220/standard.gif")
message.reply({embeds: [embed]})


},

name: "ping",
description: "Botun Şuanki Pingini Görürsünüz.",
aliases: [],
kategori: "bot",
usage: "",
}