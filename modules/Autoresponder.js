module.exports = function Autoresponder() {
    const { message } = require('../index.js');
    const userinput = message.content.toLowerCase();
    const db1 = {
        set1: {
            triggers: [
                'hi',
                'hey',
                'hello',
                'heyya',
                'hewwo',
                'sup',
                'wassup',
                'hoi',
                'hai',
                'yo',
            ],
            replies: ['Hello there!', 'Hi!', 'Hey!', "What's up?", 'Sup!'],
        },
        set2: {
            triggers: ['bye', 'cya', 'gtg'],
            replies: ['Bye!', 'See you later!'],
        },
        set3: {
            triggers: [
                'good',
                'great',
                'nice',
                'noice',
                'yay',
                'awesome',
                'cool',
            ],
            replies: ['Awesome!', 'Great!'],
        },
        set4: {
            triggers: ['lol', 'lmao', 'haha', 'xd'],
            replies: [
                '<:ar_themadman:690898831901982730>',
                ':rofl:',
                ':joy:',
                'LOL',
                'Haha!',
            ],
        },
    };

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
};
