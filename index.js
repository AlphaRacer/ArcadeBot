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
    client.user.setActivity('the Music Radio', { type: 'LISTENING' });
    client.channels.cache
        .get('781005031289258015')
        .join()
        .then(() =>
            // Go to the general channel and tell that it's listening to the Music Radio
            client.channels.cache
                .get('677532911565537280')
                .send(
                    "Hey guys! I'm listening to the **Music Radio** voice channel! Join me here: https://discord.gg/cvPAmUx3EN"
                )
                .then((sentMessage) => sentMessage.react('👍'))
        );
});

// Once the bot can start running commands
client.on('message', (message) => {
    // Card and Crate spawns
    const Database = require('@replit/database');
    const db = new Database();
    if (message) {
        db.get('messages').then((value) => {
            if (value > 100) {
                db.delete('messages').then(() => {
                    console.log('Messages reached 100 and got cleared!');
                });
            } else {
                db.get('messages').then((value) => {
                    const newMessage = value + 1;
                    db.set('messages', newMessage).then(() => {
                        db.get('messages').then((value) => {
                            if (value == 50) {
                                console.log(
                                    'Messages reached 50 and spawned Card'
                                );
                                const arr = [
                                    '__**New Arcadium Card Spawn!**__\nCard: +50\n\nhttps://i.imgur.com/mJ9EKQD.png\n`Tell the name of the Card in the chat and ping someone from the Staff Team to redeem it!`',
                                    '__**New Arcadium Card Spawn!**__\nCard: +100\n\nhttps://i.imgur.com/j3LZjyd.png\n`Tell the name of the Card in the chat and ping someone from the Staff Team to redeem it!`',
                                    '__**New Arcadium Card Spawn!**__\nCard: +150\n\nhttps://i.imgur.com/Nxe66hg.png\n`Tell the name of the Card in the chat and ping someone from the Staff Team to redeem it!`',
                                    '__**New Arcadium Card Spawn!**__\nCard: +200\n\nhttps://i.imgur.com/0vE044z.png\n`Tell the name of the Card in the chat and ping someone from the Staff Team to redeem it!`',
                                ];
                                const random = Math.floor(
                                    Math.random() * arr.length
                                );
                                const result = arr[random];

                                //   messages.channel.send(result);
                                message.client.channels.cache
                                    .get('802028218886389840')
                                    .send(result);
                                const Discord = require('discord.js');
                                const embed = new Discord.MessageEmbed()
                                    .setTitle('A New Arcadium Card spawned!')
                                    .setColor('#00ccff')
                                    .setDescription(
                                        'Check out <#802028218886389840>!\n\nBe the first one to redeem it!'
                                    );

                                message.client.channels.cache
                                    .get('677532911565537280')
                                    .send(embed);
                            } else if (value == 75) {
                                console.log(
                                    'Messages reached 75 and spawned Crate'
                                );
                                const arr2 = [
                                    '__**New Crate Spawn!**__\nCrate: +500\n\nhttps://i.imgur.com/ssbkKSh.jpg\n`Tell the name of the Crate in the chat and ping someone from the Staff Team to redeem it!`',
                                    '__**New Crate Spawn!**__\nCrate: +1000\n\nhttps://i.imgur.com/mHUzLoe.jpg\n`Tell the name of the Crate in the chat and ping someone from the Staff Team to redeem it!`',
                                    '__**New Crate Spawn!**__\nCrate: +1500\n\nhttps://i.imgur.com/KpBkjPD.jpg\n`Tell the name of the Crate in the chat and ping someone from the Staff Team to redeem it!`',
                                    '__**New Crate Spawn!**__\nCrate: +2000\n\nhttps://i.imgur.com/HROEaRT.jpg\n`Tell the name of the Crate in the chat and ping someone from the Staff Team to redeem it!`',
                                ];
                                const random2 = Math.floor(
                                    Math.random() * arr2.length
                                );
                                const result2 = arr2[random2];
                                message.client.channels.cache
                                    .get('802211279901032479')
                                    .send(result2);
                                const Discord = require('discord.js');
                                const embed = new Discord.MessageEmbed()
                                    .setTitle('A New Arcadium Crate spawned!')
                                    .setColor('#00ccff')
                                    .setDescription(
                                        'Check out <#802211279901032479>!\n\nBe the first one to redeem it!'
                                    )
                                    .setFooter(
                                        "(If you can't see the channel, subscribe to Arcadium PLUS and you'll see it)"
                                    );
                                message.client.channels.cache
                                    .get('677532911565537280')
                                    .send(embed);
                            }
                        });
                    });
                });
            }
        });
    }

    // Auto-responder
    const Autoresponder = require('./modules/Autoresponder.js');
    Autoresponder();

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
