const { MessageEmbed } = require('discord.js');

module.exports={
name: 'ping',
description: 'a simple command to tell you your ping',
category: 'info',
aliases: ['ms'],
 run: async(bot, message, args) => {
        message.channel.send(`Pinging...`).then(msg=>{
            const _ = new MessageEmbed()
            .setDescription(`**Message:** ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\n**Heartbeat:** ${Math.round(bot.ws.ping)}.ms`)
            msg.edit(_)
            msg.edit("\u2000")
        })
    }
    }
   