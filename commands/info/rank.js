const Discord = require('discord.js')
const db = require('quick.db')
const Canvacord = require('canvacord')
const ms = require('ms')
const prefix = '!'
module.exports={
    name: 'rank',
    category: 'info',
   run: async (bot,message,args ) =>{
    if (message.author.bot) return
    xp(message)
    if(message.content.startsWith(`${prefix}rank`)) {
    var user = message.mentions.users.first() || message.author
    var level = db.get(`guild_${message.guild.id}_level_${user.id}`) || 0
    level = level.toString()
    let xp = db.get(`guild_${message.guild.id}_xp_${user.id}`) || 0
    var xpNeeded = level * 500 + 500
    let every = db
    .all()
    .filter(i => i.ID.startsWith(`guild_${message.guild.id}_xptotal_`))
    .sort((a, b) => b.data - a.data)
    var rank = every.map(x => x.ID).indexOf(`guild_${message.guild.id}_xptotal_${user.id}`) + 1
    rank = rank.toString()
    let img = await Canvacord.rank({
        username: user.username,
        discrim: user.discriminator,
        status: user.presence.status,
        currentXP: xp.toString(),
        neededXP: xpNeeded.toString(),
        rank,
        level,
        avatarURL: user.displayAvatarURL({ format: "png"}),
        color: "white"
    });
    return message.channel.send(new Discord.MessageAttachment(img, "rank.png"))
    }


function xp(message) {
    if (message.content.startsWith(prefix)) return
    const randomNumber = Math.floor(Math.random() * 10) +15
    db.add(`guild_${message.guild.id}_xp_${message.author.id}`, randomNumber)
    db.add(`guild_${message.guild.id}_xptotal_${message.guild.id}`, randomNumber)
    var level = db.get(`guild_${message.guild.id}_level_${message.author.id}`) || 1
    var xp = db.get(`guild_${message.guild.id}_xp_${message.author.id}`)
    var xpNeeded = level * 500
    if (xpNeeded < xp) {
        var newLevel = db.get(`guild_${message.guild.id}_level_${message.author.id}`) || 1
        db.subtract(`guild_${message.guild.id}_xp_${message.author.id}`, xpNeeded)
		db.add(`guild_${message.guild.id}_level_${message.author.id}`, 1)
        message.channel.send(`${message.author}, you have leveled up to level ${newLevel}`)}
    const args = message.content.substring(prefix.length).split(" ")
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[1])  
    message.channel.send(`${message
    .author}, You have leveled up to 
    ${newLevel} Congratulations :tada: !`)
}}}