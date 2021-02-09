module.exports = {
    name: 'suggest',
    description: 'suggest cmd',
    execute(message, args) {
        const suggestionChannel = '678486558524964866';
        const text = message.content.split(' ').slice(1).join(' ');
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            // .setTitle(`Suggestion by ${message.author.username}:`)
            // .setDescription(text);
            .addField('Suggestion:', `${text}`);
        message.client.channels.cache
            .get(suggestionChannel)
            .send(embed)
            .then((sentMessage) => {
                sentMessage.react('⬆️');
                sentMessage.react('⬇️');
            });
        message.channel.send(
            `${message.author}, sent the suggestion to <#678486558524964866>!`
        );
    },
};
