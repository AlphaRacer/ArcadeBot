module.exports = {
    name: 'say',
    description: 'say command',
    execute(message, args) {
        const whitelist = [
            '533259452439330817',
            '568066367518015506',
            '744997753309888563',
        ];
        if (!whitelist.includes(message.author.id)) {
            message.channel.send(
                `${message.author}, you are not allowed to use that command!`
            );
        } else {
            const channelID = args[0];
            const text = message.content.split(' ').slice(2).join(' ');
            message.client.channels.cache.get(channelID).send(text);
            message.delete();
        }
    },
};
