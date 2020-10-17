const Discord = require('discord.js');
module.exports={
    name: 'warn',
    category: 'moderation',
    run: async(bot, message, args) =>{ 
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("You can\'t use this commands");

    var user = message.mentions.users.first();
    if(!user) return message.reply('You didn\'t mention anyone');

    var member;

    try{
        member = await message.guild.members.fetch(user);
    } catch(error) {
      mention = null;
    }

    if(!member) return message.reply('They aren\'t in the server');

if(member.hasPermission('ADMINISTRATOR')) return message.reply('You cannot warn that person!');

    var reason = args.splice(1).join(' ');
    if(!reason) return message.reply('You need to give a reason!')

    var channel = message.guild.channels.cache.find(c => c.name ==='moderation');

    var log = new Discord.MessageEmbed()
    .setTitle('User Warned')
    .addField('User:', user, true)
    .addField('By:', message.author, true)
    .addField('Reason:', reason)
    channel.send(log);

    var embed = new Discord.MessageEmbed()
    .setTitle('You were warned!')
    .setDescription(reason);

    try {
        user.send(embed);
    } catch(error) {
        console.warn(error);
    }

    message.channel.send(`**${user}** has been warned by **${message.author}**!`);
}}