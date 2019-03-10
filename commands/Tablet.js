const Chariot = require('chariot.js');

class Tablet {
    constructor() {
        this.name = 'tablet';
        this.aliases = [];
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
                "Wacom Intuos CTL - 480 Pen Small.",
                "https://img.kirameki.one/YnBSCfQ9.png"
            )
        );

        Chariot.Logger.log(0, 'TABLET', `${message.author.username} used the tablet command.`);
    }
}

module.exports = new Tablet();