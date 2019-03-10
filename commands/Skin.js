const Chariot = require('chariot.js');

class Skin {
    constructor() {
        this.name = 'skin';
        this.aliases = ['skins'];
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
                "Click here to download Mathi's skin!",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Osulogo.png/286px-Osulogo.png",
                "https://img.kirameki.one/gPLmtPBp.osk"
            )
        );

        Chariot.Logger.log(0, 'SKINS', `${message.author.username} used the skin command.`);
    }
}

module.exports = new Skin();