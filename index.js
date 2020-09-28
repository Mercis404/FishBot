const Discord = require("discord.js");
const fs = require("fs");
const config = require(`./config.json`);
const prefix = config.prefix;
const Canvas = require('canvas')
const bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
bot.prefix = prefix;
bot.commands = new Discord.Collection();
bot.categories = fs.readdirSync('./commands/');
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(bot);
});

require('http').createServer((req, res) => res.end('Bot is alive!')).listen(3000),

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
}, 300000),
bot.on('guildMemberAdd', member => {
  member.send(`Welcome to the server! Please read the rules.`)
})
// Pass the entire Canvas object because you'll need to access its width, as well its context
const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
const { registerFont } = require('canvas');
registerFont('Open_Sans/OpenSans-SemiBold.ttf', { family: 'Open_Sans' });
	// Declare a base size of the font
  ctx.font = '30px Open_Sans';
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px Open_Sans`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};
bot.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
  const { registerFont } = require('canvas');
registerFont('Open_Sans/OpenSans-SemiBold.ttf', { family: 'Open_Sans' });
	ctx.font = '28px Open_Sans';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Welcome to the server,`, canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Welcome to the **${member.guild.name}** ${member}!`, attachment);
});

bot.on("guildMemberRemove", member => {
  const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'welcome')
  welcomeChannel.send(`Goodbye ${member} !`)
  



})
bot.on("ready", async message => {
  console.log(`${bot.user.username} is now online`);
  await bot.user.setActivity("!help for commands | 9/27/2020-6:30 P.M EST", {
    type: 'STREAMING',
    url: 'https://www.twitch.tv/Mercisffnf'
  })

})
bot.on('message', async message => {
  if (message.content.startsWith(`${prefix}reactionrole`)) {
    if (message.guild.id !== '739620038125813814') return
    const msg = await message.channel.send("React with '✅' if you agree with our rules in #rules. React with '🎉' if you wish to become a Event Participant for our events. Read more in #event-info")
    msg.react('✅').then(msg.react('🎉'))
    message.delete()
  }
})
bot.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch()
  if (user.bot) return

  if (reaction.message.channel.id === '739620391898841149') {
    if (reaction.emoji.name === '✅') await reaction.message.guild.members.cache.get(user.id).roles.add('739621871611543564')
    if (reaction.emoji.name === '🎉') await reaction.message.guild.members.cache.get(user.id).roles.add('739759273118269440')
  }
})
bot.on('messageReactionRemove', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch()
  if (reaction.partial) await reaction.fetch()
  if (user.bot) return

  if (reaction.message.channel === '739620391898841149') {
    if (reaction.emoji.name === '✅') await reaction.message.guild.members.cache.get(user.id).roles.remove('739621871611543564')
    if (reaction.emoji.name === '🎉') await reaction.message.guild.members.cache.get(user.id).roles.remove('739759273118269440')
  }
})
bot.on('message', async message => {
	require('./events/guild/message')(bot, message)
})
const db = require("quick.db");
const Canvacord = require('canvacord')

bot.on("message", async (message) => {
    if (!message.guild || message.author.bot) return;
    // Handle XP
    xp(message);
    
});

function xp(message) {
        let xp = db.add(`xp_${message.author.id}`, 1);
        let level = Math.floor(0.3 * Math.sqrt(xp));
        let lvl = db.get(`level_${message.author.id}`) || db.set(`level_${message.author.id}`, 1);;
        if (level > lvl) {
            let newLevel = db.set(`level_${message.author.id}`, level);
            message.channel.send(`:tada: ${message.author.toString()}, You just advanced to level ${newLevel}!`);
        }
        
}




bot.login(process.env.TOKEN);