const { MessageEmbed } = require('discord.js');
module.exports={
    name: 'website',
    category: 'info',
    run: async(bot, message, args) =>{
        const websiteEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("**Websites**")
        .setDescription("Website information for FishBot")
        .addField("Twitter", "[FishBot\'s Twitter](https://twitter.com/FishBotOff)")
        .addField("Server", "[FishBot\'s Official Discord server](https://discord.gg/DkHkP7p)")
     message.channel.send(websiteEmbed)
}}
           