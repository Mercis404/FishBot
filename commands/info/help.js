const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'help',
    category: 'info',
    run: async(bot, message, args) =>{
        const helpEmbed = new MessageEmbed ()
        .setTitle("FishBot - ALL Commands")
        .setDescription("All commands for FishBot")
        .addField("**🎮 Fun Commands 🎮**",'\`8ball\`, \`avatar\`, \`bye\`,\`fireflies\`,\`hi\`, \`owo\`,\`uwu\`,\`poll\`,\`rickroll\`,\`shrek\`')
        .addField("**📜 Info Commands 📜**",'\`changelog\`, \`help\`, \`info\`,\`ping\`,\`???\`, \`website\`,\`whenwasimade\`,\`whois\`')
        .addField("**⚒️ Moderation Commands ⚒️**",'\`ban\`, \`clear\`, \`kick\`,\`mute\`,\`warn\`')
        .addField("**⚙️ Utility Commands ⚙️**",'\`covid\`')
        .setColor("RANDOM")
        .setFooter("Thank you for using FishBot services, this bot was made by Mercis")
        message.channel.send(helpEmbed)
        
    }
}