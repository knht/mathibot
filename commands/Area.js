const Chariot = require('chariot.js');

class Area {
    constructor() {
        this.name = 'area';
        this.aliases = ['driver', 'drivers'];
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
                'Mathi uses the Devocub custom drivers and a large area.',
                'https://img.kirameki.one/YnBSCfQ9.png'
            )
            .setImage('https://img.kirameki.one/qOLTBAJZ.png')
        );

        Chariot.Logger.log(0, 'AREA', `${message.author.username} used the area command.`);
    }
}

module.exports = new Area();