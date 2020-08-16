
const { MessageEmbed } = require('discord.js');
module.exports={
    name: 'thanks',
    category: 'secret',
    run: async(bot, message, args) =>{
        const thanksEmbed = new MessageEmbed()
        .setTitle('A secret command to thank those that helped me with FishBot')
        .setFooter('Thank you everyone, because of your support I have hidden several secret commands for you guys. If anyone ever needs help with something always know that I\'m open for anything and that I care about you guys')
        .setColor('RANDOM')
        .addFields(
            { name: '**Thank you to the --God\'s Sake-- groupchat and for my real life friends:**', value:'Thank you all for helping me get ideas, supporting me and being there for me', inline: false },
            { name: 'Thank you to **Pixel**:', value:'Thank you for letting me test commands on your server and for giving me ideas on what to make.'},
            { name: 'Thank you to **Deli**:', value: 'Thank you for giving me ideas on what to make, because of you we now have Trivia, you also helped me in many more ways such as introducing me to the rest of the Group chat.'}, 
            { name: 'Thank you to **Sara**:', value: 'Thank you for supporting me on making the bot, I was at a point when I felt like giving up on this bot but because of your support you helped me keep going.'},
            { name: 'Thank you to **Lele**:', value: 'Thank you for supporting me also, you also gave me many ideas for the bot. I will not name them as they\'re now easter eggs hidden which can only be found by typing the command sort of like this one.'},
            { name: 'Thank you to **Popcorn**:', value: 'Thank you for helping me feel welcomed on the groupchat when I was first added by Pixel, you have also given me a lot of ideas for the bot and for plugins for Minecraft.'}
        )  
        message.channel.send(thanksEmbed)

    }
}


        
           