const { MessageEmbed } = require("discord.js");
module.exports={
    name: '8ball',
    category: 'fun',
    run: async(bot, message, agrs) =>{
        let question = message.content.slice(bot.prefix.length+6)
        if(!question){
            return message.reply("Please ask a question")
        }else {{
            let responses = [
                "As I see it, yes.",
                "Ask again later.",
                "Better not tell you now.",
                "Cannot predict now.",
                "Concentrate and ask again.",
                "Don’t count on it.",
                "It is certain.",
                "It is decidedly so.",
                "Most likely.",
                "My reply is no.",
                "My sources say no.",
                "Outlook not so good.",
                "Outlook good.",
                "Reply hazy, try again.",
                "Signs point to yes.",
                "Very doubtful.",
                "Without a doubt.",
                "Yes.",
                "Yes – definitely.",
                "You may rely on it.",
            ]
            let Responses = responses[Math.floor(Math.random()*responses.length)-1]
            let Embed = new MessageEmbed ()
            .setTitle("8Ball")
            .setDescription('**Your Question:** '+question+"\n**8Ball Says** "+Responses)
            .setColor("RANDOM")
            message.channel.send(Embed)
        }}
    }
}