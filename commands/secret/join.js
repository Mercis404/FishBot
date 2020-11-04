const Discord = require('discord.js');
module.exports={
    name: 'join',
    category: 'secret',
    run: async(bot, message, args) =>{
bot.on('message', message => {
	if (message.content === '!join') {
		bot.emit('guildMemberAdd', message.member);
    }})}}