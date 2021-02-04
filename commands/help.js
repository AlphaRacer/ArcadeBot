module.exports = {
    name: "help",
    description: "help command",
    execute(message, args) {
        if (args[0] === "emojistatus") {
            const Discord = require('discord.js');
            const m = new Discord.MessageEmbed()
            .setTitle("Command Help: EmojiStatus")
            .setDescription("The emojistatus command lets you to set an \"emoji status\". It's just like a normal status message, but with emoji (and text)")
            .addField("Usage:", "`$emojistatus <arguments>`")
            .addField("Usable Arguments:", "`set`, `show`, `remove`")
            .addField("\"set\" argument", "Use this to set an emoji status. Example: `$emojistatus set 😉`")
            .addField("\"show\" argument", "Use this to show your emoji status or see someone else's emoji status. Example: `$emojistatus show`. You can also see the emoji status of someone specific. Example: `$emojistatus show @AlphaRacer#3197`")
            .addField("\"remove\" argument", "You can remove your emoji status with this command. Example: `$emojistatus remove`");
            message.channel.send(m);
        }
        else if (args[0] === "suggest") {
            const Discord = require('discord.js');
            const mm = new Discord.MessageEmbed()
            .setTitle("Command Help: Suggest")
            .setDescription("Use this to suggest something for the server!")
            .addField("Usage", "`$suggest <your suggestion here>`");
            message.channel.send(mm);
        }
        else if (args[0] === "welcome") {
            const Discord = require('discord.js');
            const mmm = new Discord.MessageEmbed()
            .setTitle("Command Help: Welcome")
            .setDescription("Welcome a user by mentioning them or providing their ID")
            .addField("Usage", "`$welcome <arguments>`")
            .addField("Usable arguments:", "`-id`")
            .addField("`-id` argument:", "Use this to welcome a user with their id. Example: `$welcome -id 568066367518015506`")
            .addField("General usage:", "`$welcome @user`");
            message.channel.send(mmm);
        }
        else if (args[0] === "poll") {
            const Discord = require('discord.js');
            const mmmm = new Discord.MessageEmbed()
                .setTitle("Command Help: Poll")
                .setDescription("Create a simple Yes/No poll")
                .addField("Usage", "`$poll <question>`")
                .addField("Example:", "`$poll Do you like ice-cream?`");
            message.channel.send(mmmm);
        }
        else {
        const Discord = require('discord.js');
        const helpembed = new Discord.MessageEmbed()
        .setTitle("Help Command")
        .setDescription("Available commands:")
        .addField("`$emojistatus`", "The emoji status command.")
        .addField("`$suggest`", "Use this to suggest something for the server!")
        .addField("`$welcome`", "Welcome a user by mentioning them or providing their ID")
        .setFooter("Do $help <command> for info on a command");
        message.channel.send(helpembed);
        }
    }
}