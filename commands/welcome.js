module.exports = {
    name: 'welcome',
    description: 'welcome cmd',
    execute(message, args) {
        function getUserFromMention(mention) {
            if (!mention) return;

            if (mention.startsWith('<@') && mention.endsWith('>')) {
                mention = mention.slice(2, -1);
                if (mention.startsWith('!')) {
                    mention = mention.slice(1);
                    return message.client.users.cache.get(mention);
                    }
                }
            }
            if (args[0] === "-id") {
                message.delete();
                message.channel.send(`Welcome to the server <@${args[1]}>!`);
            } else {
                message.delete();
                const user = getUserFromMention(args[0]);
                message.channel.send(`Welcome to the server, <@${user.id}>!`);
            }
        }
    }