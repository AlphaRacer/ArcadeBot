module.exports = {
    name: 'emojistatus',
    description: 'emojistatus command',
    execute(message, args) {
        function getUserFromMention(mention) {
            if (!mention) return;

            if (mention.startsWith('<@') && mention.endsWith('>')) {
                mention = mention.slice(2, -1);
                if (mention.startsWith('!')) {
                    mention = mention.slice(1);
                }
                return message.client.users.cache.get(mention);
            }
        }

        const Database = require('@replit/database');
        const db = new Database();
        const status = message.content.split(' ').slice(2).join(' ');
        if (!args[0]) {
            message.channel.send('Use a valid argument: `set`, `show`');
        } else if (args[0] === 'set') {
            db.set(message.author.id, status).then(() => {
                message.channel.send(`Emoji status set: ${status}`);
            });
        } else if (args[0] === 'show') {
            const user = getUserFromMention(args[1]);
            if (!user) {
                const Discord = require('discord.js');
                db.get(message.author.id).then((value) => {
                    if (!value) {
                        message.channel.send(
                            `${message.author}, you haven't set an emoji status yet!\nTo set an emoji status, do \`$emojistatus set <your emoji status here>\` (replace \`<your emoji status here>\` with your emoji status.)`
                        );
                    } else {
                        const embed1 = new Discord.MessageEmbed()
                            .setTitle('Emoji Status:')
                            .setAuthor(
                                `${message.author.tag}`,
                                `${message.author.displayAvatarURL({
                                    dynamic: true,
                                })}`
                            )
                            .setDescription(`> ${value}`)
                            .setFooter(
                                'If you react to this message with ⭐, the Emoji Status message will go to the starboard channel.'
                            );
                        message.channel
                            .send(embed1)
                            .then((sentMessage) => sentMessage.react('⭐'));
                        // message.react('👍');
                        // message.react('👎');
                        // message.react('⭐');
                        // sentMessage.react('')
                    }
                });
            } else {
                db.get(user.id).then((value) => {
                    if (!value) {
                        message.channel.send(
                            `${message.author}, ${user.tag} hasn't set an Emoji Status yet.`
                        );
                    } else {
                        const Discord = require('discord.js');
                        const embed = new Discord.MessageEmbed()
                            .setTitle('Emoji Status:')
                            .setAuthor(
                                `${user.tag}`,
                                `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
                            )
                            .setDescription(`> ${value}`);
                        message.channel.send(embed);
                    }
                });
            }
        } else if (args[0] === 'remove') {
            db.delete(message.author.id).then(() => {
                message.channel.send('Removed your Emoji status!');
            });
        }
    },
};
