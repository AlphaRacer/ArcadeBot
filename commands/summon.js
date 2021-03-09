module.exports = {
    name: 'summon',
    description: 'summon command',
    execute(message, args) {
        message.channel.send("*Who Dared To Summon Me?! >:O*").then(() => {
            const filter = m => m.content.toLowerCase().includes('me');
            const collector = message.channel.createMessageCollector(filter, { time: 15000 });

            collector.on('collect', m => {
                if (m.author.id === "785824286303846400") {
                    return;
                } else {
	                message.reply("Sure but **why did you summon me? >:O**");
                }
            });

            collector.on('end', collected => {
	            console.log(`Collected ${collected.size} items`);
                return;
            });
        })
    }
}