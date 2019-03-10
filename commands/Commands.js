const Chariot = require('chariot.js');

class Commands {
    constructor() {
        this.name = 'commands';
        this.aliases = ['help', 'command', 'cmds', 'cmd'];
        this.owner = false;
    }

    /**
     * Main method running upon triggering the command
     * @param {object} message The message object emitted from the Discord API
     * @param {string[]} args The collected arguments
     * @param {object} chariot The bot client
     */
    async execute(message, args, chariot) {
        message.channel.createEmbed(new Chariot.RichEmbed()
            .setColor(0xFF9185)
            .setAuthor(
                "All available commands",
            )
            .setThumbnail("https://img.kirameki.one/rtaGG1mA.jpg")
            .setDescription(
                "Commands are updated regularly!\n\n" +
                "**!about**, " + 
                "**!area**, " + 
                "**!grip**, " + 
                "**!drag**, " + 
                "**!hover**, " + 
                "**!keyboard**, " + 
                "**!monitor**, " + 
                "**!resolution**, " +
                "**!tablet**, " + 
                "**!specs**, " + 
                "**!skin**, " + 
                "**!commands**"
            )
        );

        Chariot.Logger.log(0, 'HELP', `${message.author.username} used the help command.`);
    }
}

module.exports = new Commands();