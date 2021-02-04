module.exports = {
    name: 'reject',
    description: 'suggest reject cmd',
    async execute(message, args) {
        const modsAndAdmins = ['568066367518015506', '744997753309888563', '533259452439330817', '528178986166255617', '683919248824991773'];
        if (!modsAndAdmins.includes(message.author.id)) {
            message.channel.send("You are not allowed to use this command.");
        } else {
            const messageID = args[0];
        message.channel.messages.fetch(`${messageID}`).then((message) => {
            return new Promise(resolve => {
                message.delete();
                message.channel.send(`Rejected ${messageID}!`);
            })
        })
        }
    }
}