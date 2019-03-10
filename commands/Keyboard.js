const Chariot = require('chariot.js');

class Keyboard {
    constructor() {
        this.name = 'keyboard';
        this.aliases = ['kb'];
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
                "Logitech G610 Orion with Cherry MX Brown switches.",
                "https://seeklogo.com/images/L/logitech-gaming-logo-B76FC713B0-seeklogo.com.png"
            )
        );

        Chariot.Logger.log(0, 'KEYBOARD', `${message.author.username} used the keyboard command.`);
    }
}

module.exports = new Keyboard();