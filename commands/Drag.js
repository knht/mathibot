const Chariot = require('chariot.js');

class Drag {
    constructor() {
        this.name = 'drag';
        this.aliases = ['dragging', 'hover', 'hovering', 'grip'];
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
                "Mathi hovers and holds his pen like this:",
                "https://www.webantics.com/content/images/thumbs/001/0010855_wacom-intuos-pen-and-touch-graphics-tablet-medium-a5_600.jpeg"
            )
            .setImage("https://img.kirameki.one/k4UYia6g.png")
        );

        Chariot.Logger.log(0, 'DRAG', `${message.author.username} used the drag/hover command.`);
    }
}

module.exports = new Drag();