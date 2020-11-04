
 
const channelId = '773333653962752020'
const check = '✅'
let registered = false

const registerEvent = (bot) => {
  if (registered) {
    return
  }

  registered = true

  console.log('REGISTERING EVENTS')

  bot.on('messageReactionAdd', (reaction, user) => {
    if (user.bot) {
      return
    }

    console.log('HANDLING REACTION')
    const { message } = reaction
    if (message.channel.id === channelId) {
      message.delete()
    }
  })
}

module.exports = {
  name: 'ticket',
  commands: ['ticket', 'support'],
  minArgs: 1,
  expectedArgs: '<message>',
  callback: (userMessage, args, text, bot) => {
    const { guild, member } = userMessage

    registerEvent(bot)

    const channel = guild.channels.cache.get(channelId)
    channel
      .send(
        `A new ticketh has been creaated by <@${member.id}>
    
"${text}"
Click the ${check} icon when this issue has been resolved.`
      )
      .then((ticketMessage) => {
        ticketMessage.react(check)

        userMessage.reply(
          'Your ticket has been sent! Expect a reply within 24 hours.'
        )
      })
  },
}
