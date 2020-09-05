const Discord = require('discord.js');
const client = new Discord.Client();
const messageEmbed = require('./utils/messageembed')

require('dotenv').config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

client.on('ready', () =>{
    console.log(`está vivo ${client.user.tag}`)
});

client.on('message', msg => {
    if (msg.content.match("¿") || msg.content.charAt(msg.content.length - 1) === "?") {
    //   msg.reply('En un momento te contestan');
        msg.channel.send(messageEmbed());
    }
  });

client.login(DISCORD_TOKEN);