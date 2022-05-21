const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply("Rolleri Yönetme İzininiz Yok.")

let user = message.mentions.users.first();
let rol = message.mentions.roles.first();

if(!user) return message.reply("Lütfen Rolü Kimden Alacağımı Etiketleyerek Belirtiniz örnek kullanım: p!rol-al @kişi @alınacak rol")
if(!rol) return message.reply("Lütfen Alacağım Rolü Belirtin örn: p!rol-al @kişi @alınacak rol")


message.guild.members.cache.get(user.id).roles.remove(rol)

const embed = new Discord.MessageEmbed()
.setColor("GOLD")
.setAuthor("PYRO")
.setDescription(`${user}, **isimli kişiden** ${rol} **isimli rol alındı**.`)
.setImage("https://cdn.discordapp.com/attachments/977511331139842080/977525051945521183/standard_1.gif")



message.reply({embeds:[embed]})





},

name: "rol-al",
description: "Etiketlediğiniz Kullanıcıdan Belirttiğiniz Rolü Alırsınız",
aliases: [],
kategori: "moderasyon",
usage: "",
}