# Mathi Bot
This is an extremely simple Discord bot based on the [Chariot.js](https://github.com/riyacchi/chariot.js) framework for the Mathi community guild on Discord. Its main purpose is to deliver information about the gear, settings and specifications of the top osu! player Mathi & notifying the guild when he goes live on Twitch.

# Installation
As this is a ***really*** specific bot, I don't particularly see the usecase for self hosting this, however in case someone wants to fiddle around with it anyway, it's the usual:

1. Initialize your project with `npm init`
2. Clone the repo into your working directory
3. Run `npm install` to install all dependencies (Mainly `chariot.js` and `twitchps`)
4. Plug in your Discord bot's tokena and your Discord ID in the `index.js` file
5. Run the bot with `node index.js`

# Support
I won't provide any support for this repository as it's basically just a specialty bot for a single guild and not meant to be used over and over again. However if you want to use the Twitch PubSub code for a custom Discord + Twitch notification bot feel free to do so, as this repository is licensed under the [MIT License](https://opensource.org/licenses/MIT)