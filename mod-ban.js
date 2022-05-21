const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

        if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply("Üyeleri Banlama İzininiz Yok")


/////  !ban @kişi sebep

        let user = message.mentions.users.first();
        let sebep = args[1]


        if(!user) return message.reply("**Lütfen Banlanmak istediğiniz kişiyi belirtin | örnek kullanım** : p!ban @kişi sebep.")
        if(!sebep) return message.reply("**Lütfen kişiyi Banlama Sebepinizi Belirtiniz | örnek kullanım** : p!ban @kişi sebep ")


const üye = message.guild.members.cache.get(user.id)

üye.ban({reason: sebep})


const ban = new Discord.MessageEmbed()
.setAuthor("PYRO")
.setColor("GOLD")
.setDescription(`${user}, **Sunucudan Banlandı 🚀**
banlanma sebebi: **${sebep}**`)


message.reply({embeds:[ban]})


},

name: "ban",
description: "Belirlenen kişiyi banlarsın",
aliases: [],
kategori: "moderasyon",
usage: "",
}