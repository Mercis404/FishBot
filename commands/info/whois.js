const { getMember, formatDate } = require("../../functions.js");
const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags")

module.exports={
    name: 'whois',
    aliases: ["whois", "who", "user"],
    timeout: 3000,
    run: async(bot, message, args) =>{
        const member = getMember(message, args.join(" "));


        // member variables
        const joined = formatDate(member.joinedAt);
        const roles = member.roles.cache
        .filter(r => r.id !== message.guild.id)
        .map(r => r)
        .join(", ") || "none";

        // User variables
        const created = formatDate(message.author.createdAt);

        const embed = new MessageEmbed()
        .setFooter(member.displayName, member.user.displayAvatarURL)
        .setThumbnail(member.user.displayAvatarURL)
        .setColor("RANDOM")

        .addField("User Information", stripIndents`\n**ID:** ${member.user.id}
        \n**Username:** ${member.user.username}
        \n**Discord Tag** ${member.user.tag}
        \n**Registered On:** ${member.user.createdAt}`, true)

        .addField("Server Information", stripIndents`\n**Display Name:** ${member.displayName}
        \n**Joined At:** ${joined}
        \n**Roles:** ${roles}`, true)
        .setTimestamp()

        message.channel.send(embed)
        

    }
}
