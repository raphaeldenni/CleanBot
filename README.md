# Cleanbot
A bot for the [Discord server](https://discord.gg/S7ADp8AEYA) of the french cleanwalk platform [Cleanwalk.org](https://cleanwalk.org)

![.](https://i.imgur.com/qtd1Ry1.png)

## Requirements

You need to download the following module with npm :
- Discord.js (v14) : `npm i discord.js`
- Dotenv (latest) : `npm i dotenv`
- @napi-rs/canvas (latest) : `npm i @napi-rs/canvas`
- Moment.js (latest) : `npm i moment`

You need to provide 3 variables into a file located at `./ressources/config.json` :
- `clientId` : the client ID of your bot
- `guildId` : the ID of the guild where the bot will be used
- `welcome_channel` : the ID of the welcome channel
- `count_channel` : the ID of the count channel

You need to provide the bot's token into a `.env` file with this format : 

`BOT_TOKEN=[your_token]`

Finally, you need to download `OdibeeSans-Regular` font into the `ressources` folder.