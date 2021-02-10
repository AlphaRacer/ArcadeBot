module.exports = {
    name: 'approve',
    description: 'approve cmd',
    async execute(message, args) {
        const modsAndAdmins = [
            '568066367518015506',
            '744997753309888563',
            '533259452439330817',
            '528178986166255617',
            '683919248824991773',
        ];
        if (!modsAndAdmins.includes(message.author.id)) {
            message.channel.send('You are not allowed to use this command.');
        } else {
            if (args[1] == "-tdl") {
                const messageID = args[0];
                const priorityVal = args[2].toLowerCase();
                var priority;
                switch(priorityVal) {
                    case 'low':
                        priority = 'Low';
                        break;
                    case 'medium':
                        priority = 'Medium';
                        break;
                    case 'high':
                        priority = 'High';
                        break;
                }
                message.channel.messages.fetch(`${messageID}`).then((message) => {
                return new Promise(async (resolve) => {
                    message.delete();
                    const Discord = require('discord.js');
                    function getMsgContent() {
                        message.channel.messages.fetch(`${messageID}`).embeds[0].description.then((msg) => {
                            return new Promise(async (resolve) => {
                                return msg.embeds[0].description;
                            })
                        })
                    }
                        }
                    }
                    // const msgContent = await message.channel.messages.fetch(`${messageID}`).embeds[0].description;
                    console.log(msgContent);
                    const embed = new Discord.MessageEmbed()
                    .setTitle("New To-do list item")
                    .addField("To-do:", getMsgContent())
                    .addField("Priority:", priority)
                    .setColor('#17a2b8');
                    message.client.channels.cache.get('803106537425469500').send(embed);
                    message.channel.send(`Approved ${messageID} and added it to the to-do list!`);
                });
            });
            } else {
            const messageID = args[0];
            message.channel.messages.fetch(`${messageID}`).then((message) => {
                return new Promise((resolve) => {
                    message.delete();
                    message.channel.send(`Approved ${messageID}!`);
                });
            });
            }
        }
    },
};
