const { MessageEmbed } = require('discord.js');
module.exports={
    name: 'partner',
    category: 'info',
    run: async(bot, message, args) =>{
        const serversEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("**Partnered servers**")
        .addField("[Adrieliu's Art and Animation Server](https://discord.gg/pRvmqGy)")
     message.channel.send(serversEmbed)
}}