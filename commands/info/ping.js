const Discord = require('discord.js');
module.exports={
    name: 'ping',
    category: 'info',
    timeout: 10000,
    run: async(bot, message, args) =>{
        message.channel.send(`Pinging...`).then(msg=>{
            const _ = new Discord.MessageEmbed()
            .setDescription(`**Message:** ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\n**Heartbeat:** ${Math.round(bot.ws.ping)}.ms`)
            msg.edit(_)
            msg.edit("\u2000")
        })
    }
}