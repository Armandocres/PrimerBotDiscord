const Discord = require('discord.js');
const messageEmbed = () =>{
    const msgEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Tengo tu duda')
    .setDescription('En un momento te contestan crack ')

    return msgEmbed;
}

module.exports = messageEmbed;