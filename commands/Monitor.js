const Chariot = require('chariot.js');

class Monitor {
    constructor() {
        this.name = 'monitor';
        this.aliases = ['display', 'displays', 'monitors'];
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
                "Dell Alienware AW2518H 240Hz & LG 22M38H 60Hz",
                "https://img.kirameki.one/G4882Utf.png"
            )
        );

        Chariot.Logger.log(0, 'MONITOR', `${message.author.username} used the monitor command.`);
    }
}

module.exports = new Monitor();