const { MessageEmbed, Channel } = require('discord.js')
module.exports={
    name: 'poll',
    category: 'fun',
    run: async(bot,message,args)=>{
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('You don\'t have permissions to use this command')
        
        const channel = message.mentions.channels.first() ||message.guild.channels.cache.get(args[0])
        if(!channel){
            return message.channel.send('You did not mention / give the id of the channel you wanted to create the poll in!')
        }
        let question = message.content.slice(bot.prefix.length+5+channel.id.length+3)
        if(!question){
            return message.channel.send('You didn\'t specify a question for your poll!')
        }
        const Embed = new MessageEmbed()
        .setTitle('New poll!')
        .setDescription(question)
        .setFooter(`${message.author.username} created this poll`)
        let msg = await bot.channels.cache.get(channel.id).send(Embed)
await msg.react('👍')
await msg.react('👎')
    }
}