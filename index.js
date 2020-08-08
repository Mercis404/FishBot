
const Discord = require("discord.js");
const fs = require("fs");
const config = require(`./config.json`)
const prefix = config.prefix;
const bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
bot.prefix = prefix;
bot.commands = new Discord.Collection();
bot.categories = fs.readdirSync('./commands/');
["command"].forEach(handler =>{
    require(`./handlers/${handler}`)(bot);
});
bot.on("ready", async message => {
    console.log(`${bot.user.username} is now online`);
    await bot.user.setPresence({ game: { name: 'name' }, status: 'dnd' });
    bot.user.setActivity("!help for commands", {type: "PLAYING"})
})
bot.on('message', async message =>{
    if(message.content.startsWith(`${prefix}reactionrole`)) {
        const msg = await message.channel.send("React with '✅' if you agree with our rules in #rules. React with '🎉' if you wish to become a Event Participant for our events. Read more in #event-info")
        msg.react('✅').then(msg.react('🎉'))
        message.delete()
     }
    })
    bot.on('messageReactionAdd', async (reaction, user) => {
        if(reaction.message.partial) await reaction.message.fetch()
        if(user.bot) return

        if(reaction.message.channel.id === '739620391898841149') {
            if(reaction.emoji.name ==='✅') await reaction.message.guild.members.cache.get(user.id).roles.add('739621871611543564')
            if(reaction.emoji.name ==='🎉') await reaction.message.guild.members.cache.get(user.id).roles.add('739759273118269440')
        }
    })
    bot.on('messageReactionRemove', async (reaction, user) => {
        if(reaction.message.partial) await reaction.message.fetch()
        if(reaction.partial) await reaction.fetch()
        if(user.bot) return

        if(reaction.message.channel === '739620391898841149') {
            if(reaction.emoji.name ==='✅') await reaction.message.guild.members.cache.get(user.id).roles.remove('739621871611543564')
            if(reaction.emoji.name ==='🎉') await reaction.message.guild.members.cache.get(user.id).roles.remove('739759273118269440')
        }
     })
bot.on('message', async message =>{
    require('./events/guild/message')(bot, message)
})
           
bot.login(process.env.TOKEN);