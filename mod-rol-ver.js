const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply("Rolleri Yönet Yetkiniz Bulunmamakta.")

let user = message.mentions.users.first();
let rol = message.mentions.roles.first();

if(!user) return message.reply("Lütfen kime rol vereceğimi etiketleyerek belirtiniz örnek kullanım : p!rol-ver @kişi @verilecek rol")
if(!rol) return message.reply("Lütfen Verilecek rolü etiketleyerek belirtiniz örnek kullanım : p!rol-ver @kişi @verilecek rol")


message.guild.members.cache.get(user.id).roles.add(rol)

const embed = new Discord.MessageEmbed()
.setColor("GOLD")
.setAuthor("PYRO")
.setDescription(`${user}, **isimli kişiye** ${rol} **isimli rol verildi. ✅**`)
.setImage ("https://cdn.discordapp.com/attachments/977511331139842080/977525051945521183/standard_1.gif")


message.reply({embeds:[embed]})





},

name: "rol-ver",
description: "Etiketlediğiniz kişiye istediğiniz rolü verirsiniz",
aliases: [],
kategori: "moderasyon",
usage: "",
}