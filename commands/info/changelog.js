const { MessageEmbed } = require('discord.js');
module.exports={
    name: 'changelog',
    category: 'info',
    run: async(bot,message,args)=>{
        const changesEmbed = new MessageEmbed()
        .setTitle('Changes for V.1.0.1')
        .setColor('RANDOM')
        .addFields (
            { name: '**Removed:**', value:'pimpchimp,coldcoffee,helps,pop and channel stats', inline: false },
            { name: '**Added:**', value: 'Covid-19 stats,8Ball,a new warning system,changelog,whois,avatar and help.', inline: false},
            { name: '**Changes:**', value: 'ping,website,whenwasimade,kick,mute,and clear now have their own embed and should run more smoothly.', inline: false },
        )
        return message.channel.send(changesEmbed)
    }}