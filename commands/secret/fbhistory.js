
const { MessageEmbed } = require('discord.js');
module.exports={
    name: 'fbhistory',
    category: 'secret',
    run: async(bot, message, args) =>{
        const historyEmbed = new MessageEmbed()
        .setTitle('A secret command to thank those that helped me with FishBot')
        .setFooter('This is a secret command, if you are a member from the GSGC then you now have 3/5 of the secret commands')
        .setColor('RANDOM')
        .addFields(
            { name: '**FishBot\'s history**', value:'Did you know that FishBot was originally created as a mii character for Halloween?', inline: false },
        )  
        message.channel.send(historyEmbed)

    }
}


        
           