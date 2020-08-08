const Discord = require('discord.js');
module.exports={
    name: 'version',
    category: 'info',
    run: async(bot, message, args) =>{
    message.channel.send("I am on version v.1.0.1");
    }
}
           