const Chariot = require('chariot.js');

class Resolution {
    constructor() {
        this.name = 'resolution';
        this.aliases = ['res'];
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
                "1920x1080 in Windows and 1600x1024 in osu!",
                "https://img.blogs.es/anexom/wp-content/uploads/2009/02/hd2.png"
            )
        );

        Chariot.Logger.log(0, 'RESOLUTION', `${message.author.username} used the resolution command.`);
    }
}

module.exports = new Resolution();