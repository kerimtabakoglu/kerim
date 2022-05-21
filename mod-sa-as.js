const Discord = require("discord.js");
const db = require("nrc.db")


module.exports = {
    calistir: async(client, message, args) => {


let saas = db.fetch(`saas_${message.guild.id}`)


if(!saas) {
db.set(`saas_${message.guild.id}`, true)
message.reply(`**Sa As Sistemi Başarılı Bir Şekilde Açıldı ✅ (kapatmak için birdaha p!sa-as yazınız)**`)
message.channel.send("https://cdn.discordapp.com/attachments/977511331139842080/977525051945521183/standard_1.gif")
return;
}
db.delete(`saas_${message.guild.id}`)

message.reply(`**Sa As sistemi başarılı bir şekilde kapatıldı. ✅**`)
message.channel.send("https://cdn.discordapp.com/attachments/977511331139842080/977525051945521183/standard_1.gif")




},

name: "sa-as",
description: "Otomatik Sa As Sistemini Açıp/Kapatmana olanak sağlar",
aliases: ["saas"],
kategori: "moderasyon",
usage: "",
}