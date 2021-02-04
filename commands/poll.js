module.exports = {
    name: 'poll',
    description: 'poll cmd',
    execute(message, args) {
        const modsAndAdmins = ['568066367518015506', '744997753309888563', '533259452439330817', '528178986166255617', ]
        if (message.channel.id === "686591242196484136") {
        if (!modsAndAdmins.includes(message.author.id)) {
            message.channel.send("You can't run that command!");
        } else {
        const text = message.content.split(' ').slice(1).join(' ');
        const Discord = require('discord.js');
        const pollEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setTitle("Poll:")
        .setDescription(`${text}`);
        message.channel.send("<@&787685491641810954> New Poll! <:ar_piingblob:690897678913110108>").then(() => {
            message.channel.send(pollEmbed).then((sentMessage) => {
                sentMessage.react('782130642233589792');
                sentMessage.react('782130720793296916');
            })
        })
        }
    } else {
        const text = message.content.split(' ').slice(1).join(' ');
        const Discord = require('discord.js');
        const pollEmbed = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setTitle("Poll:")
            .setDescription(`${text}`);
            message.channel.send(pollEmbed).then((sentMessage) => {
                sentMessage.react('782130642233589792');
                sentMessage.react('782130720793296916');
                                                            })
                                                            message.delete();
    }
    }
}