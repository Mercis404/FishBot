const require = ('discord.js')
const Canvacord = require("canvacord")
const db = require('quick.db')
const Canvas0 = new Canvacord()
module.exports={
    name: 'rank',
    category: 'info',
    run: async(bot, message, args) =>{
bot.on('message', async message => {
    if(message.author.bot) return
    xp(message)
    if(message.content.startsWith(`${PREFIX}rank`)){
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
        var image = await canvas0.rank({
            username: user.username,
            discrim: user.discriminator,
            status: user.presence.status,
            currentXP: xp.toString(),
            neededXP: xpNeeded.toString(),
            rank,
            level,
            avatarURL: user.displayAvatarURL({ format: "png" }),
            color: "aqua"
        })
        return message.channel.send(new Discord.MessageAttachment(img, "rank.png"))
    }
})
function xp(message) {
    if(message.content.startsWith(PREFIX)) return
    const randomNumber = Math.floor(Math.random() *10) + 15
    db.add(`guild_${message.guild.id}_xp_${message.author.id}`, randomNumber)
    db.add(`guild_${message.guild.id}_xptotal_${message.guild.id}`, randomNumber)
    var level = db.get(`guild_${message.guild.id}_level_${message.author.id}`) || 1
    var xp = db.get(`guild_${message.guild.id}_xp_${message.author.id}`)
    var xpNeeded = level = 500
    if(xpNeeded < xp) {
        var newLevel = db.add(`guild_${message.guild.id}_level_${message.author.id}`, 1)
        db.subtract(`guild_${message.guild.id}_xp_${message.author.id}`, xpNeeded)
        message.channel.send(`${message.author}, you have leveled up to level ${newLevel}`)
    }
}}}