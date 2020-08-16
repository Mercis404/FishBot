const { MessageEmbed } = require('discord.js');
module.exports={
    name: 'changelog',
    category: 'info',
    run: async(bot,message,args)=>{
        const changesEmbed = new MessageEmbed()
        .setTitle('Changes for V.1.0.1')
        .setColor('RANDOM')
        .addFields (
            { name: '**ReAdded:**', value:'channel stats(only works in the Hangout Room server)', inline: false },
            { name: '**Added:**', value: 'trivia, bread and more secret commands', inline: false},
            { name: '**Changes:**', value: 'Info command has been changed to Version, whois registered on featured now displays proper information and is more specific', inline: false },
        )
        return message.channel.send(changesEmbed)
    }}
