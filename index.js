
const Discord = require("discord.js");
const fs = require("fs");
const config = require(`./config.json`)
const prefix = config.prefix;
const bot = new Discord.Client({disableMentions:"everyone"});
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
    require('./events/guild/message')(bot, message)
})
           
bot.login(process.env.TOKEN);