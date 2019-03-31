const Chariot   = require('chariot.js');
const TwitchPS  = require('twitchps');

/**
 * Main bot class extending Chariot.js
 */
class MathiBot extends Chariot.Client {
    constructor() {
        super(
            new Chariot.Config(
                '',
                `${__dirname}/commands`,
                {
                    prefix: '!',
                    owner: ['']
                },
                {
                    disableEveryone: false
                }
            )
        );

        this.twitchPStopics     = [{ topic: 'video-playback.mathi109' }];
        this.pubSub             = new TwitchPS({ init_topics: twitchPStopics, reconnect: true, debug: false });
        this.logger             = Chariot.Logger;

        // Run the Twitch PubSub initializer
        this._initializeTwitchPubSub();
    }

    /**
     * Initialize the connection to Twitch's PubSub service for notifying the guild once he starts streaming.
     */
    _initializeTwitchPubSub() {
        this.on('ready', async () => {
            const announcementChannel = this.guilds.get('427200060980330508').channels.get('427220212014645260');

            // Connect to Twitch PS services
            this.pubSub.on('connected', async () => {
                this.logger.log(0, 'TWITCH PS', 'Successfully connected to Twitch PubSub services!');
            });

            // Listen for stream to go live
            this.pubSub.on('stream-up', async (data) => {
                if (data.channel_name === 'mathi109') {
                    announcementChannel.createMessage(`@everyone Mathi is now lie on Twitch! https://www.twitch.tv/mathi109`);
                    this.logger.log(0, 'TWITCH PS', 'Mathi just went live!');
                }
            });
        });
    }
}

module.exports = new MathiBot();