const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {


if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("Bu Komudu Kullanabilmek için sunucuyu yönet yetkisine sahip olmanız gerekmekte.")


message.channel.clone().then(channel => {
channel.setPosition(message.channel.position)
channel.send("https://cdn.discordapp.com/attachments/977511331139842080/977525051945521183/standard_1.gif")
channel.send(`**Kanal Başarılı bir şekilde sıfırlandı.** ✅`)
})
message.channel.delete()





},

name: "nuke",
description: "Belirlenen kanalı sıfırlarsın",
aliases: [""],
kategori: "moderasyon",
usage: "",
}