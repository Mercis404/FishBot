const Discord = require('discord.js')
module.exports = {
    name: 'clear',
    category: 'moderation',
    run: async (bot, message) => {
        const messageArray = message.content.split(' ');
        const args = messageArray.slice(1);
        if (
            !message.member.roles.cache.find((r) => r.name === "Owner" || !message.member.roles.cache.find((r) => r.name === "Moderator" || !message.member.roles.cache.find((r) => r.name === "Admin" ))))
            return message.channel.send(
                "You do not have permission to execute this command.");

        let deleteAmount;

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please put a number only!') }
        if (parseInt(args[0]) > 100) {
            return message.reply('You can only delete 100 messages at a time!')
        } else {
            deleteAmount = parseInt(args[0]);

        }
        message.channel.bulkDelete(deleteAmount + 1, true);
        await message.channel.send(`**Successfully** Deleted ***${deleteAmount}*** Messages.`).then(m => m.delete({ timeout: 5000 }))
    }
}