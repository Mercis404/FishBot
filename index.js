
const Discord = require("discord.js");
const fs = require("fs");
const config = require(`./config.json`);
const message = require("./events/guild/message");
const prefix = config.prefix;
const bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
bot.prefix = prefix;
bot.commands = new Discord.Collection();
bot.categories = fs.readdirSync('./commands/');
["command"].forEach(handler =>{
    require(`./handlers/${handler}`)(bot);
});
bot.on('ready', () => {
    const guild = bot.guilds.cache.get('739620038125813814')

    const userCountChannel = guild.channels.cache.get('744746181325881365')
    const userCount = guild.members.cache.filter(member => !member.user.bot).size
    userCountChannel.setName(`User Count: ${userCount}`)

    const botCountChannel = guild.channels.cache.get('744747237975785592')
    const botCount = guild.members.cache.filter(member => member.user.bot).size
    botCountChannel.setName(`Bot Count: ${botCount}`)

    const memberCountChannel = guild.channels.cache.get('744748515724623954')
    const memberCount = guild.members.cache.size
    memberCountChannel.setName(`Member Count: ${memberCount}`)

    const roleCountChannel = guild.channels.cache.get('744749455307440261')
    const roleCount = guild.roles.cache.size
    roleCountChannel.setName(`Role Count: ${roleCount}`)

    const channelCountChannel = guild.channels.cache.get('744750270000660531')
    const channelCount = guild.channels.cache.size
    channelCountChannel.setName(`Channels: ${channelCount}`)
}, 300000)
bot.on('guildMemberAdd', member => {
    member.send(`Welcome to the server! Please read the rules.`)
})
bot.on("guildMemberAdd", member =>{
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'welcome')
    welcomeChannel.send(`Welcome! ${member}, make sure to check the rules at <#739620112029581374> and if you agree to our rules then verify in <#739620391898841149>`)
    
})

bot.on("guildMemberRemove", member =>{
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'welcome')
    welcomeChannel.send(`Goodbye! ${member}`)
})
bot.on("ready", async message => {
    console.log(`${bot.user.username} is now online`);
    await bot.user.setActivity("!help for commands | 9/27/2020-6:30 P.M EST", {
        type: 'STREAMING',
        url: 'https://www.twitch.tv/Mercisffnf'
    })
      
})
bot.on('message', async message =>{
    if(message.content.startsWith(`${prefix}reactionrole`)) {
if (message.guild.id !== '739620038125813814')
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
