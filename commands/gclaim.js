module.exports = {
    name: 'gclaim',
    description: 'gclaim command',
    execute(message, args) {
        function getUserFromMention(mention) {
            if (!mention) return;
            if (mention.startsWith('<@') && mention.endsWith('>')) {
                mention = mention.slice(2, -1);
                if (mention.startsWith('!')) {
                    mention = mention.slice(1);
                                                                                                                    }                                                                                                  return message.client.users.cache.get(mention);
                                                                                                                }
                                                                                                           }
            const host = getUserFromMention(args[0]);
            const Discord = require('discord.js');
            const prize = message.content.split(' ').slice(2).join(' ');
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
            .setTitle("New Giveaway Prize to be claimed!")
            .addField("Giveaway Host:", `<@${host.id}>`)
            .addField("Prize:", `${prize}`)
            .setColor("#17a2b8")
            message.client.channels.cache.get('807567935765086318').send(embed);
            message.reply("Sent the request to <#807567935765086318>")

    }
        }