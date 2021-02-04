module.exports = {
    name: 'rep',
    description: 'rep command',
    execute(message, args) {   
    const Database = require("@replit/database")
    const db = new Database()

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

    if (args[0] === "give") {
        const modsAndAdmins = ['568066367518015506', '744997753309888563', '533259452439330817', '528178986166255617', ]
        if (!modsAndAdmins.includes(message.author.id)) return;
        const num = args[2];
        const personToAddTo = getUserFromMention(args[1]);
        const reason = message.content.split(' ').slice(4).join(' ');
        if (reason) {
        db.set(`${personToAddTo.id}_rep`, num).then(() => {
            message.reply(`Added ${num} rep to ${personToAddTo.tag}!`);
            message.client.channels.cache.get('805660320466206751').send(`**${message.author.tag}** added \`${num}\` rep to ${personToAddTo.tag}. Reason: ${reason}`);
        });
        } else if (!reason) {
            db.set(`${personToAddTo.id}_rep`, num).then(() => {
            message.reply(`Added ${num} rep to ${personToAddTo.tag}!`);
            message.client.channels.cache.get('805660320466206751').send(`**${message.author.tag}** added \`${num}\` rep to ${personToAddTo.tag}. Reason was not provided.`);
        }); 
        }
    }
    else if (args[0] === "remove") {
        const modsAndAdmins = ['568066367518015506', '744997753309888563', '533259452439330817', '528178986166255617', ]
        if (!modsAndAdmins.includes(message.author.id)) return;
        const num = args[2];
        const personToRemoveFrom = getUserFromMention(args[1]);
        const reason = message.content.split(' ').slice(4).join(' ');
        var val;
        db.get(`${personToRemoveFrom.id}_rep`).then(value => {
            val = value;
        });
        var finalValue = val - num;
        if (reason) { 
        db.set(`${personToRemoveFrom.id}_rep`, finalValue).then(() => {
            if (finalValue === null || "NaN") {
                message.channel.send(`Removed ${num} rep from ${personToRemoveFrom.tag}, they now have 0 rep.`);
                message.client.channels.cache.get('805660320466206751').send(`${message.author.tag} removed ${num} rep from ${personToRemoveFrom.tag}, they now have 0 rep. Reason: ${reason}`)
            }
            else {
            message.channel.send(`Removed ${num} rep from ${personToRemoveFrom.tag}, they now have ${finalValue} rep.`);
            message.client.channels.cache.get('805660320466206751').send(`${message.author.tag} removed ${num} rep from ${personToRemoveFrom.tag}, they now have ${finalValue}. Reason: ${reason}`)
            }
        });
        } else if (!reason) {
            db.set(`${personToRemoveFrom.id}_rep`, finalValue).then(() => {
            if (finalValue === null || "NaN") {
                message.channel.send(`Removed ${num} rep from ${personToRemoveFrom.tag}, they now have 0 rep.`);
                message.client.channels.cache.get('805660320466206751').send(`${message.author.tag} removed ${num} rep from ${personToRemoveFrom.tag}, they now have 0 rep. Reason was not provided.`)
            }
            else {
            message.channel.send(`Removed ${num} rep from ${personToRemoveFrom.tag}, they now have ${finalValue} rep.`);
            message.client.channels.cache.get('805660320466206751').send(`${message.author.tag} removed ${num} rep from ${personToRemoveFrom.tag}, they now have ${finalValue}. Reason was not provided.`)
            }
        });
        }
    }
    else if (!args[0]) {
        db.get(`${message.author.id}_rep`).then(value => {
            if (value === null) {
                message.reply("You don't have any rep.");
            } else {
            message.channel.send(`${message.author}, your rep is ${value}`);
            }
        });
    }
    }
}