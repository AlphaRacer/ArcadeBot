const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);

// Import required modules
const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');
const prefix = config.prefix;
const client = new Discord.Client();
client.commands = new Discord.Collection();
require('dotenv').config(); // Use dotenv

// Initialize command handler
const commandFiles = fs
    .readdirSync('./commands')
    .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// Once the bot has initialized
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('Alpha\'s Arcade', { type: 'WATCHING' });
});

// Once the bot can start running commands
client.on('message', (message) => {
    const roleID = '814369732383735808';
    // Card and Crate spawns
    const Database = require('@replit/database');
    const db = new Database();
    if (message) {
        db.get('messages').then((value) => {
            if (value > 200) {
                db.delete('messages').then(() => {
                    console.log('Messages reached 200 and got cleared!');
                });
            } else {
                db.get('messages').then((value) => {
                    const newMessage = value + 1;
                    db.set('messages', newMessage).then(() => {
                        db.get('messages').then((value) => {
                            if (value == 150) {
                                console.log(
                                    'Messages reached 150 and spawned Card'
                                );
                                // const arr = [
                                //     '__**New Arcadium Card Spawn!**__\nCard: +50\n\nhttps://i.imgur.com/mJ9EKQD.png\n`Tell the name of the Card in the chat and ping someone from the Staff Team to redeem it!`',
                                //     '__**New Arcadium Card Spawn!**__\nCard: +100\n\nhttps://i.imgur.com/j3LZjyd.png\n`Tell the name of the Card in the chat and ping someone from the Staff Team to redeem it!`',
                                //     '__**New Arcadium Card Spawn!**__\nCard: +150\n\nhttps://i.imgur.com/Nxe66hg.png\n`Tell the name of the Card in the chat and ping someone from the Staff Team to redeem it!`',
                                //     '__**New Arcadium Card Spawn!**__\nCard: +200\n\nhttps://i.imgur.com/0vE044z.png\n`Tell the name of the Card in the chat and ping someone from the Staff Team to redeem it!`',
                                // ];
                                // const random = Math.floor(
                                //     Math.random() * arr.length
                                // );
                                // const result = arr[random];
                                const Discord = require('discord.js');
                                var links = ['https://media.discordapp.net/attachments/798422277661786162/810731228160327680/50_Card_-_Copy.png?width=849&height=425', 'https://media.discordapp.net/attachments/798422277661786162/810731232572866590/100_Card.png?width=849&height=425', 'https://media.discordapp.net/attachments/798422277661786162/810731232425672734/150_Card.png?width=849&height=425', 'https://media.discordapp.net/attachments/798422277661786162/810731648555155498/200_Card.png?width=849&height=425'];
                                const x = ['a', 'b', 'c', 'd'];
                                switch(x[Math.floor(Math.random() * x.length)]) {
                                    case 'a':
                                        let e = new Discord.MessageEmbed()
                                        .setColor('#17a2b8')
                                        .setTimestamp()
                                        .addField("How do I redeem it?", "> Tell the amount (number) on the Card and ping someone from the Staff Team.")
                                        .setImage(links[0]);
                                        message.client.channels.cache.get('814346043302740009').send(`<@&${roleID}> **New Arcadium Card Spawn!**`);
                                        message.client.channels.cache.get('814346043302740009').send(e);
                                        break;
                                    case 'b':
                                        let ee = new Discord.MessageEmbed()
                                        .setColor('#17a2b8')
                                        .setTimestamp()
                                        .addField(":grey_question: How do I redeem it?", "> Tell the amount (number) on the Card and ping someone from the Staff Team.")
                                        .setImage(links[1]);
                                        message.client.channels.cache.get('814346043302740009').send(`<@&${roleID}> **New Arcadium Card Spawn!**`);
                                        message.client.channels.cache.get('814346043302740009').send(ee);
                                        break;
                                    case 'c':
                                        let eee = new Discord.MessageEmbed()
                                        .setColor('#17a2b8')
                                        .setTimestamp()
                                        .addField(":grey_question: How do I redeem it?", "> Tell the amount (number) on the Card and ping someone from the Staff Team.")
                                        .setImage(links[2]);
                                        message.client.channels.cache.get('814346043302740009').send(`<@&${roleID}> **New Arcadium Card Spawn!**`);
                                        message.client.channels.cache.get('814346043302740009').send(eee);
                                        break;
                                    case 'd':
                                        let eeee = new Discord.MessageEmbed()
                                            .setColor('#17a2b8')
                                            .addField(":grey_question: How do I redeem it?", "> Tell the amount (number) on the Card and ping someone from the Staff Team.")
                                            .setTimestamp()
                                            .setImage(links[3]);
                                            message.client.channels.cache.get('814346043302740009').send(`<@&${roleID}> **New Arcadium Card Spawn!**`);
                                        message.client.channels.cache.get('814346043302740009').send(eeee);
                                        break;
                                }

                                // message.client.channels.cache
                                //     .get('802028218886389840')
                                //     .send(result);
                                // const Discord = require('discord.js');
                            } else if (value == 200) {
                                console.log(
                                    'Messages reached 200 and spawned Crate'
                                );
                                // const arr2 = [
                                //     '__**New Crate Spawn!**__\nCrate: +500\n\nhttps://i.imgur.com/ssbkKSh.jpg\n`Tell the name of the Crate in the chat and ping someone from the Staff Team to redeem it!`',
                                //     '__**New Crate Spawn!**__\nCrate: +1000\n\nhttps://i.imgur.com/mHUzLoe.jpg\n`Tell the name of the Crate in the chat and ping someone from the Staff Team to redeem it!`',
                                //     '__**New Crate Spawn!**__\nCrate: +1500\n\nhttps://i.imgur.com/KpBkjPD.jpg\n`Tell the name of the Crate in the chat and ping someone from the Staff Team to redeem it!`',
                                //     '__**New Crate Spawn!**__\nCrate: +2000\n\nhttps://i.imgur.com/HROEaRT.jpg\n`Tell the name of the Crate in the chat and ping someone from the Staff Team to redeem it!`',
                                // ];
                                // const random2 = Math.floor(
                                //     Math.random() * arr2.length
                                // );
                                // const result2 = arr2[random2];
                                const x = ['a', 'b', 'c', 'd'];
                                // const Discord = require('discord.js');
                                var links = ['https://media.discordapp.net/attachments/798422277661786162/811084260382867547/500_Crate.png?width=813&height=407', 'https://media.discordapp.net/attachments/798422277661786162/811084265365700658/1000_Crate.png?width=813&height=407', 'https://media.discordapp.net/attachments/798422277661786162/811084269551353906/1500_Crate.png?width=813&height=407', 'https://media.discordapp.net/attachments/798422277661786162/811084268280479794/2000_Crate.png?width=813&height=407'];
                                switch(x[Math.floor(Math.random() * x.length)]) {
                                    case 'a':
                                        let e = new Discord.MessageEmbed()
                                        .setColor('#17a2b8')
                                        .addField(":grey_question: How do I redeem it?", "> Tell the *type* of Crate. Refer the pinned message for help.")
                                        .setTimestamp()
                                        .setImage(links[0]);
                                        message.client.channels.cache.get('814345812490321941').send(`<@&${roleID}> **New Arcadium Crate Spawn!**`);
                                        message.client.channels.cache.get('814345812490321941').send(e);
                                        break;
                                    case 'b':
                                        let ee = new Discord.MessageEmbed()
                                        .setColor('#17a2b8')
                                        .setTimestamp()
                                        .addField(":grey_question: How do I redeem it?", "> Tell the *type* of Crate. Refer the pinned message for help.")
                                        .setImage(links[1]);
                                        message.client.channels.cache.get('814345812490321941').send(`<@&${roleID}> **New Arcadium Crate Spawn!**`);
                                        message.client.channels.cache.get('814345812490321941').send(ee);
                                        break;
                                    case 'c':
                                        let eee = new Discord.MessageEmbed()
                                        .setColor('#17a2b8')
                                        .setTimestamp()
                                        .addField(":grey_question: How do I redeem it?", "> Tell the *type* of Crate. Refer the pinned message for help.")
                                        .setImage(links[2]);
                                        message.client.channels.cache.get('814345812490321941').send(`<@&${roleID}> **New Arcadium Crate Spawn!**`);
                                        message.client.channels.cache.get('814345812490321941').send(eee);
                                        break;
                                    case 'd':
                                        let eeee = new Discord.MessageEmbed()
                                        .setColor('#17a2b8')
                                        .setTimestamp()
                                        .addField(":grey_question: How do I redeem it?", "> Tell the *type* of Crate. Refer the pinned message for help.")
                                        .setImage(links[3]);
                                        message.client.channels.cache.get('814345812490321941').send(`<@&${roleID}> **New Arcadium Crate Spawn!**`);
                                        message.client.channels.cache.get('814345812490321941').send(eeee);
                                }
                            }
                        });
                    });
                });
            }
        });
    }

    // Auto-responder or Chatbot
    const userinput = message.content.toLowerCase();
    const db1 = require('./db/db.js');

    // If the message content contains any greeting words
    if (db1.set1.triggers.includes(userinput)) {
        result = Math.floor(Math.random() * db1.set1.replies.length);
        message.channel.send(db1.set1.replies[result]);
    }

    // If the message content contains any words like bye
    if (db1.set2.triggers.includes(userinput)) {
        result = Math.floor(Math.random() * db1.set2.replies.length);
        message.channel.send(db1.set2.replies[result]);
    }

    // If the message content contains any words like thank you
    if (db1.set3.triggers.includes(userinput)) {
        result = Math.floor(Math.random() * db1.set3.replies.length);
        message.channel.send(db1.set3.replies[result]);
    }

    // If the message content contains any words like thank you
    if (db1.set4.triggers.includes(userinput)) {
        result = Math.floor(Math.random() * db1.set4.replies.length);
        message.channel.send(db1.set4.replies[result]);
    }

    // Support Chatbot
    if (!message.channel.id === '807453062956449803') {
        return;
    } else if (message.channel.id === '807453062956449803') {
        const help = message.content.toLowerCase();
        switch (help) {
            case 'help':
                message.delete();
                let embed = new Discord.MessageEmbed()
                    .setTitle('Help | Support Chatbot')
                    .setDescription('What kind of help do you want?')
                    .addField(':one: General Server-Related Help', 'Send "`1`"')
                    .addField(':two: Report Bug in Server', 'Send "`2`"')
                    .addField(':three: Make a Suggestion', 'Send "`3`"')
                    .addField(':four: Other', 'Send "`4`"')
                    .setColor('#17a2b8')
                    .setFooter(
                        `Command requested by ${message.author.tag}`,
                        `${message.author.displayAvatarURL({ dynamic: true })}`
                    );
                message.channel.send(embed);
                break;
            case '1':
                message.delete();
                let embed1 = new Discord.MessageEmbed()
                    .setTitle(':one: General Server-Related Help')
                    .setDescription('What kind of General Help do you want?')
                    .addField(
                        ":regional_indicator_a: I'd like to know about something in the server",
                        'Send "`1a`"'
                    )
                    .addField(
                        ":regional_indicator_b: I'd like to partner/sponsor my server with this server",
                        'Send "`1b`"'
                    )
                    .addField(
                        ':regional_indicator_c: How do I get self-roles?',
                        'Send "`1c`"'
                    )
                    .setFooter(
                        `Can't find what help you need? Go back to the main menu by sending "help" | Command requested by ${message.author.tag}`,
                        `${message.author.displayAvatarURL({ dynamic: true })}`
                    )
                    .setColor('#28a745');
                message.channel.send(embed1);
                break;
            case '2':
                message.delete();
                let embed2 = new Discord.MessageEmbed()
                    .setTitle(':two: Report Bug in Server')
                    .setFooter(
                        `Command requested by ${message.author.tag}`,
                        `${message.author.displayAvatarURL({ dynamic: true })}`
                    )
                    .addField(
                        'Answer:',
                        'Follow __[these instructions](https://discord.com/channels/677532911054094367/678487165461856297/785880168370929736)__ and create a **support ticket** to contact staff about it.'
                    )
                    .setColor('#28a745');
                message.channel.send(embed2);
                break;
            case '3':
                message.delete();
                let embed3 = new Discord.MessageEmbed()
                    .setTitle(':three: Make a Suggestion')
                    .setFooter(
                        `Command requested by ${message.author.tag}`,
                        `${message.author.displayAvatarURL({ dynamic: true })}`
                    )
                    .addField(
                        'Answer:',
                        "Go to <#723917702460211260> and do `$suggest <your suggestion here>`. If you don't understand how the suggest command works, do `$help suggest`"
                    )
                    .setColor('#28a745');
                message.channel.send(embed3);
                break;
            case '4':
                message.delete();
                let embed4 = new Discord.MessageEmbed()
                    .setTitle(':four: "Other" Help')
                    .addField(
                        'Answer:',
                        'Follow __[these instructions](https://discord.com/channels/677532911054094367/678487165461856297/785880168370929736)__ and create a **support ticket** to contact staff about it.'
                    )
                    .setColor('#28a745');
                message.channel.send(embed4);
                break;
            case '1a':
                message.delete();
                let embed5 = new Discord.MessageEmbed()
                    .setFooter(
                        `Command requested by ${message.author.tag}`,
                        `${message.author.displayAvatarURL({ dynamic: true })}`
                    )
                    .setTitle(
                        ":one: :regional_indicator_a: I'd like to know about something in the server"
                    )
                    .addField(
                        'Answer:',
                        'Ping an online admin/mod and they will help you out.'
                    )
                    .setColor('#28a745');
                message.channel.send(embed5);
                break;
            case '1b':
                message.delete();
                let embed6 = new Discord.MessageEmbed()
                    .setFooter(
                        `Command requested by ${message.author.tag}`,
                        `${message.author.displayAvatarURL({ dynamic: true })}`
                    )
                    .setTitle(
                        ":one: :regional_indicator_b: I'd like to partner/sponsor my server with this server"
                    )

                    .addField(
                        'Answer:',
                        'Buy [the "Server Sponsorship/Partnering" item](https://discord.com/channels/677532911054094367/695169578103341106/807463516876832788) from <#695169578103341106>.\nAfter buying the item, send "`u!use Server Sponsorship/Partnering`" in <#723917702460211260> and DM <@568066367518015506> with the permanent invite link of your server and the ad (if you have one)'
                    )

                    .setColor('#28a745');

                message.channel.send(embed6);

                break;

            case '1c':
                message.delete();

                let embed7 = new Discord.MessageEmbed()

                    .setFooter(
                        `Command requested by ${message.author.tag}`,
                        `${message.author.displayAvatarURL({ dynamic: true })}`
                    )

                    .setTitle(
                        ':one: :regional_indicator_c: How do I get self-roles?'
                    )

                    .addField(
                        'Answer:',
                        'Go to <#678564086837149696> and get self-roles from there!'
                    )

                    .setColor('#28a745');
                message.channel.send(embed7);
                break;
            case 'done':
                message.channel.bulkDelete(99);
                let e = new Discord.MessageEmbed()

                    .setTitle('Help | Support Chatbot')

                    .setDescription('What kind of help do you want?')

                    .addField(':one: General Server-Related Help', 'Send "`1`"')

                    .addField(':two: Report Bug in Server', 'Send "`2`"')

                    .addField(':three: Make a Suggestion', 'Send "`3`"')

                    .addField(':four: Other', 'Send "`4`"')

                    .setColor('#17a2b8')

                    .setFooter(
                        `Command requested by ${message.author.tag}`,
                        `${message.author.displayAvatarURL({ dynamic: true })}`
                    );
                message.channel.send(e);
                break;
        }
    }

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

client.login(process.env.TOKEN);
