const Discord = require('discord.js');
module.exports={
    name: 'kick',
    category: 'moderation',
    run: async(bot, message, args) =>{
            if (
                !message.member.roles.cache.find(
                    (r) =>
                        r.name === "Owner" ||
                        !message.member.roles.cache.find(
                            (r) =>
                                r.name === "Moderator" ||
                                !message.member.roles.cache.find((r) => r.name === "Admin" 
                                )

                        )
                )
            )
                return message.channel.send(
                    "You do not have permission to execute this command.");
            var user = message.mentions.users.first();

            if (user) {
                const member = message.mentions.members.first();

                if (member) {
                    member.kick('You were kicked for not following the rules').then(() => {
                        message.reply(`${user.tag} was kicked from the server`);
                    }).catch(err => {
                        message.reply('I cannot kick the user')
                        console.log(err);
                    });
                } else {
                    message.reply("That user isn\'t in the server")
                }

            } else {
                message.reply('That user isn\'t in the server')
            }
        }}