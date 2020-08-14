const Discord = require('discord.js');
module.exports={
    name: 'info',
    category: 'info',
    run: async(bot, message, args) =>{
    message.channel.send("I am on version v.1.0.5");
    }
}
           
