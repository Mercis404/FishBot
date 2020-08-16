const { MessageEmbed } = require('discord.js');
module.exports={
    name: 'bread',
    category: 'fun',
    run: async(bot,message,args)=>{
        const breadEmbed = new MessageEmbed()
        .setTitle("Bread Bread Bread Bread")
        .setColor("RANDOM")
        .setFooter("blame deli for this command it was not me i swear")
      .setImage(url="http://i.imgur.com/S9P7ffp.jpg")
            message.channel.send(breadEmbed)
        }
    }