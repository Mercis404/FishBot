const { MessageEmbed } = require('discord.js');
let questions = [
    {
        title: "Best programming language",
        options: ["JavaScript/TypeScript", "Python","Ruby","Rust"],
        correct: 1
    },
    {
        title: "What part of the atom has no electric charge?",
        options: ["Neutron","Proton","Electron"],
        correct: 1
    },
    {
        title: "How many parts (screws and bolts included) does the average car have?",
        options: ["40,000","50,000","30,000","20,000"],
        correct:3
    },
    {
        title: "Which country produces the most coffee in the world?",
        options: ["China","Italy","Australia","Brazil","Russia"],
        correct: 4
    },
    {
        title: "About how many taste buds does the average human tongue have?",
        options: ["20,000","15,000","5,000","10,000","12,720"],
        correct: 4
    },
    {
        title: "What is the name of the thin, but a long country that spans more than half of the western coast of South America?",
        options: ["Ecuador","Peru","Uruguay","Argentina","Chile"],
        correct: 5
    },
    {
        title: "Which two countries share the longest (or largest) international border?",
        options:["Canada and the USA", "Mexico and the USA","Norway and Sweden"],
        correct: 1
    },
    {
        title: "When is Canada Day?",
        options:["July 4th","September 24th","Augus 7th","July 1st"],
        correct: 4
    },
    {
        title: "What country celebrates the Storming of the Bastille?",
        options: ["Canada","Mexico","Brazil","France"],
        correct: 4
    },
    {
        title: "What is the scientific name of a wolf?",
        options: ["Canis lupus","Wolf","Dog but more hostile","Canary"],
        correct: 1
    },
    {
        title: "How many eyes does a bee have?",
        options: ["7","8","2","5","6"],
        correct: 4
    },
    {
        title: "How many hearts does an octopus have?",
        options: ["Five","Three","Seven","One"],
        correct: 2
    },
    {
        title: "How many Pyramids of Giza were made?",
        options: ["Three","Two","Seven","One"],
        correct: 1
    },
    {
        title: "How many cards are there in a deck of Uno?",
        options: ["112","108","120","115"],
        correct: 2
    },
    {
        title: "If there are 6 apples and you take away 4, how mant do you have?",
        options: ["0","2","4","6"],
        correct: 3
    },
]
module.exports={
    name: "trivia",
    description: "Test your knowledge",
    category: "fun",
    run: async(bot, message, args)=>{
        let q = questions[Math.floor(Math.random()*(questions.length))]
        let i = 0;
        const Embed = new MessageEmbed()
        .setTitle(q.title)
        .setDescription(q.options.map(opt=>{
                i++;
                return `${i} - ${opt}\n`
        }))
        .setColor(`RANDOM`)
        .setFooter(`Reply to this message with the correct question number! You have 15 seconds.`)
        message.channel.send(Embed)
        try{
            let messages = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 15000, max: 1, errors: ["time"]})
            if(parseInt(messages.first().content)==q.correct){
                return message.channel.send(`You got it correct!`)
            }else{
                return message.channel.send(`You got it incorrect.`)
            }
        }catch(e){
            return message.channel.send(`You did not answer!`)
        }
    }
}