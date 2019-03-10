const Chariot = require('chariot.js');

class About {
    constructor() {
        this.name = 'about';
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
                'Mathi Bot v1.0.0 made with lots of ❤️ by Riya',
                chariot.user.dynamicAvatarURL('jpg', 256),
                'https://discord.gg/kKPZdA6'
            )
        );

        Chariot.Logger.log(0, 'ABOUT', `${message.author.username} used the about command.`);
    }
}

module.exports = new About();