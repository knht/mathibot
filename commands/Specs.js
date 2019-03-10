const Chariot = require('chariot.js');

class Specs {
    constructor() {
        this.name = 'specs';
        this.aliases = ['pc', 'computer', 'cpu', 'gpu', 'ram'];
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
            .setThumbnail("https://img.kirameki.one/7HdDzAqC.png")
            .setAuthor(
                "Computer Specifications"
            )
            .setDescription(
                "**CPU:** Intel Core i5 7400\n" + 
                "**GPU:** Nvidia GeForce GTX 1050 Ti\n" +
                "**RAM:** 1 x 8GB Corsair Vengeance DDR4"
            )
        );

        Chariot.Logger.log(0, 'SPECS', `${message.author.username} used the specs command.`);
    }
}

module.exports = new Specs();