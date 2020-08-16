
const { MessageEmbed } = require('discord.js');
module.exports={
    name: 'fbname',
    category: 'secret',
    run: async(bot, message, args) =>{
        const nameEmbed = new MessageEmbed()
        .setTitle('A secret command to thank those that helped me with FishBot')
        .setFooter('This is a secret command, if you are a member from the GSGC then you now have 2/5 of the secret commands')
        .setColor('RANDOM')
        .addFields(
            { name: '**FishBot\'s history**', value:'Did you know that FishBot was originally going to be called \"Project A3" because it was a test for how well I could do with code?', inline: false },
        )  
        message.channel.send(nameEmbed)

    }
}


        
           