const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
//console.log(config.prefix)
const pf = "Jarvis"

bot.login(process.env.BOT_TOKEN)

bot.on('message', (msg) => {
    if(msg.author.bot) return;
    if (msg.content.startsWith("Jarvis")) { 
        processCommand(msg)
    };
});
function Sender(Thing, message){
    Thing.channel.send(message)
}

function processCommand(msg) {
    let fullcmd = msg.content.substr(6)
    let split = fullcmd.split(" ")
    let primary = split[0]
    let arguments = split.slice(1)
    var id = null
    var server = msg.guild
    if (msg == "Jarvis"){
        msg.channel.send(`Yes ${msg.author}? For Usage do Jarvis.help`)
        id = msg.author.id
        var filter = m => m.author.id == id
        var waitmsg
        msg.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] })
        .then(collected => {waitmsg = collected.array()[0].content; console.log(collected.array()[0].content); 
            if ((waitmsg.toLowerCase() == "hi")) {
                Sender(msg, "Hello Sir, How are you?")
            }
            if ((waitmsg.toLowerCase() == "fuck you")) {
                Sender(msg, "No Sir, Fuck You.")
            }
            if ((waitmsg.toLowerCase() == "run diagnostics")) {
                //Sender(msg, "The bot creator hasn't enabled me to run diagnostics")
                msg.channel.send(`There are currently ${server.memberCount} members and ${server.channels.array().length} Channels in the server, Sir.`)
                
            }

            })//console.log(collected.array()[0].content))
        .catch(collected => {waitmsg = collected.array()[0].content; console.log(collected.array()[0].content); if (waitmsg == "Hi"){
            msg.channel.send("Hello Sir, How are you?")
        }})
        if (waitmsg == "Hi"){
            msg.channel.send("Hello Sir, How are you?")
        }
    }
    if ((primary == ".help") || (primary == ".h")) {
        helpcmd(arguments, msg)
    }
    if ((primary == ".makechannel") || (primary == ".mchan")) {
        makeChannel(msg, arguments)
    }
    if ((primary == ".google") || (primary == ".g")) {
        googlecmd(arguments, msg)
    }
    else if ((primary == ".youtube") || (primary == ".y")){
        youtubecmd(arguments, msg)
    }
    else if ((primary == ".addrole" ) || (primary == ".ar" )) {
        //446827734124068865
        arole(arguments, msg)
    }
    else if ((primary == ".makecategory" ) || (primary == ".mcat" )) {
        //446827734124068865
        makeCategory(arguments, msg)
    }
    else if ((primary == ".setup" ) || (primary == ".set" )) {
        //446827734124068865
        setup(arguments, msg)
    }
    else if ((primary == ".BetaYankeeEchoGolfUniformYankeeSierra" ) || (primary == ".set" )) {
        //446827734124068865
        byeguys(arguments, msg)
    }
}
//BetaYankeeEchoGolfUniformYankeeSierra
function byeguys(arguments, message){
    var server = message.guild;
    var name = message.author.username;
    let searchquery = arguments.join("-")
    console.log(message.author.id)
    console.log(server.ownerID)
    if (message.author.id == server.owner.id){
        server.channels.forEach(function(element){
            element.delete();
        })
    }   
    else{
       message.channel.send("Your not the owner of the Server")
    }
}
// function arole(arguments, msg){
//     if (arguments.length == 0) {
//         msg.channel.send("Insufficient arguements, if needed use `Jarvis.h` or `Jarvis.help` command for usage")
//     }
//     else {
//         if (arguments[1] !== undefined) {
//             let member = msg.mentions.members.first()
//             console.log(member)
//             //msg.channel.send(e
//             //console.log(arguments[1].name)
//             member.addRole('446827734124068865')
//             msg.channel.send(`Finished Sir.`)
//         }
//         else{
//             msg.channel.send("Insufficient arguements, if needed use `Jarvis.h` or `Jarvis.help` command for usage")
//         }
//     }
    
// }
function helpcmd(arguments, msg){
    if (arguments.length == 0) {
        msg.channel.send("What is it you need help with Sir?")
        msg.channel.send({embed: {
            color: 1752220,
            author: {
                name: bot.user.username,
                icon_url: bot.user.displayAvatarURL
            },
            title: "Here are a list of Commands:",
            //url: "https://www.google.com",
            description: "",
            fields: [{
                name: "Command:`.google` or `.g`",
                value: "`Jarvis.google` This is an example or `Jarvis.g This is an example` will return  a google search\n"
              },
              {
                name: "Command:`.youtube` or `.y` ",
                value: "`Jarvis.youtube` This is an example or `Jarvis.y This is an example` will return  a Youtube Search\n"
              },
              //{
                //name: "Command:`.makerole` or `.mr`",
                //value: "`Jarvis.makerole` This is an example or `Jarvis.mr This is an example` will return  a Youtube ////Search\n"
              //}
              {
                name: "Command:`.makecategory` or `.mcat` ",
                value: "`Jarvis.makecategory chicken feet` This is an example or `Jarvis.mcat garbage toes`"
              },
              {
                name: "Command:`.makechannel` or `.mchan` ",
                value: "`Jarvis.makechannel mokey money` This is an example or `Jarvis.mchan barf babies"
              },
              {
                name: "Command:`.makecatgory` or `.mcat` ",
                value: "`Jarvis.makecatgory mokey money` This is an example or `Jarvis.mcat barf babies"
              },
              {
                name: "Command:`.setup` or `.set` ",
                value: "`Jarvis.setup` and the server will start creating channels and categories"
              },
              {
                name: "Command: `.BetaYankeeEchoGolfUniformYankeeSierra`",
                value: "The uppercase letters in the command spell out BYEGUYS and can be only ran by the owner of the server, now once the command is ran there is no turning back everything will delete and you have to start the channels up, luckily the bot has came with the `.set` or `.setup` command for you to refurbish your server use the `BYEGUYS` Command wisely usage:`Jarvis.BetaYankeeEchoGolfUniformYankeeSierra`"
              }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: bot.user.displayAvatarURL ,
                text: "© Jarvis"
            }
          }
        });
    }
    else {
        msg.channel.send(`You need help with ${arguments}?`)
        //https://www.youtube.com/results?search_query=
    }
}

function makeChannel(message, arguments){
    var server = message.guild;
    var name = message.author.username;
    let searchquery = arguments.join("-")
    if (message.author.id == server.owner.id){
        server.createChannel(searchquery, "text"); 
    }else{
        message.channel.send("Your not the server owner")
    }
    
}
function makeCategory(arguments, message){
    var server = message.guild;
    var name = message.author.username;
    let searchquery = arguments.join("-")
    if (message.author.id == server.owner.id){
        server.createChannel(searchquery, "category");
    }
    else{
        message.channel.send("Your not the server owner")
    }
}
function setup(arguments, message){
    var server = message.guild;
    var name = message.author.username;
    let searchquery = arguments.join("")
    if (message.author.id == server.owner.id){
        server.channels.forEach(function(element){
        })
        function finder(value){ 
            var chicken = server.channels.find(c => c.name === value);
            return chicken
        }
        var Bunnies = finder("🤝-chat-🤝")
        if (Bunnies !== null){
            console.log("YES")
            var channelthing = finder("🤝-chat-🤝")
            message.channel.send(`This command has already been ran ${message.author}`)
        }//.BetaYankeeEchoGolfUniformYankeeSierra
        else{
            //console.log(Bunnies.name)
            async function Channelmaker(Sent, Table){
                let cat = await server.createChannel(Sent, "category");
                Table.forEach(function(Name) {
                var chan = server.createChannel(Name,
                    {"parent": cat
                })
                });
            }
            Channelmaker("Important", ["⚖️ Rules ⚖️", "🎬 Sneaks 🎬", "🗣 Announcements 🗣","📱 Social 📱"])
            Channelmaker("Misc", ["🤝 Chat 🤝", "🤖 Bot-Commands 🤖", "❓ QnA ❓", "🗳️ Polls 🗳️"])
            Channelmaker("Events", ["🎁 Giveaways 🎁", "🎮 Game Night 🎮", "🎥 Streams 🎥"])
        }
    }else{
        message.channel.send("Your not the server owner")
    }
}
function googlecmd(arguments, msg){
    let searchquery = arguments.join("+")
    if (arguments.length == 0) {
        msg.channel.send({embed: {
            color: 3066993,
            author: {
                name: bot.user.username,
                icon_url: bot.user.displayAvatarURL
            },
            title: "How to use `.google` or `.g` command:",
            fields: [{
                name: "Example:",
                value: "`Jarvis.g Fish monkeys` or `Jarvis.google Fish monkeys` will return \n"
              }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: bot.user.displayAvatarURL ,
                text: "© Jarvis"
            }
          }
        });
    }
    else {
        //setTimeout(() => console.log("hi"), 5000)
        msg.channel.send({embed: {
            color: 3066993,
            author: {
                name: bot.user.username,
                icon_url: bot.user.displayAvatarURL
            },
            fields: [{
                name: `Searched the web for "${arguments.join(" ")}"...`,
                value: `https://www.google.com/search?q=${arguments.join("+")} ${msg.author}`
              }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: bot.user.displayAvatarURL ,
                text: "© Jarvis"
            }
          }
        });
    }
    
}


function youtubecmd(arguments, msg){
    let searchquery = arguments.join("+")
    if (arguments.length == 0) {
        msg.channel.send({embed: {
            color: 15158332,
            author: {
                name: bot.user.username,
                icon_url: bot.user.displayAvatarURL
            },
            title: "How to use `.youtube` or `.y` command:",
            fields: [{
                name: `Example:`,
                value: `https://www.youtube.com/results?search_query=${arguments.join("+")}`
              }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: bot.user.avatarURL,
                text: "© Jarvis"
            }
          }
        });
    }
    else {
        msg.channel.send({embed: {
            color: 15158332,
            author: {
                name: bot.user.username,
                icon_url: bot.user.displayAvatarURL
            },
            fields: [{
                name: `\nSearched Youtube for "${arguments.join(" ")}"...`,
                value: `https://www.youtube.com/results?search_query=${arguments.join("+")} ${msg.author}`
              }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: bot.user.avatarURL,
                text: "© Jarvis"
            }
          }
        });
    }
    
}

bot.on('ready', () => {
    bot.user.setActivity(`The Server`, { type: "WATCHING"});
});
