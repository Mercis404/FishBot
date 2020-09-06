const { MessageEmbed } = require('discord.js')
module.exports.run = (bot, message, args) => {
        message.channel.send(`Pinging...`).then(msg=>{
            const _ = new Discord.MessageEmbed()
            .setDescription(`**Message:** ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\n**Heartbeat:** ${Math.round(bot.ws.ping)}.ms`)
            msg.edit(_)
            msg.edit("\u2000")
        })
    }
    module.exports.help = {
        name: "ping",
        description: "a simple command that tell you your ping",
        category: "info"
    }
    module.exports.requirements = {
        userPerms: [],
        botPerms: [],
        ownerOnly: false
    }
