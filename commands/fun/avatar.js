const { MessageEmbed } = require('discord.js');
module.exports={
    name: 'avatar',
    category: 'fun',
    timeout: 2000,
    run: async(bot, message, args) =>{
        let Embed = new MessageEmbed()
        if(!message.mentions.users.first()){
            Embed.setTitle(`Your Avatar`);
            Embed.setImage(message.author.displayAvatarURL());
            Embed.setColor(`RANDOM`);
            return message.channel.send(Embed);
        } else {
            let User = message.mentions.members.first();
            Embed.setTitle(`${bot.users.cache.get(User.id).tag}'s Avatar!`);
            Embed.setImage(bot.users.cache.get(User.id).displayAvatarURL());
            Embed.setColor(`RANDOM`);
            return message.channel.send(Embed)
        }
    },
};