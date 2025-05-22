# Cleanbot
A bot for the [Discord server](https://discord.gg/S7ADp8AEYA) of the french cleanwalk platform [Cleanwalk.org](https://cleanwalk.org)

![.](https://i.imgur.com/qtd1Ry1.png)

## Requirements

You need to download the following module with npm :
- Discord.js (v12) : `npm i discord.js@12.X.X`
- Dotenv (latest) : `npm i dotenv`
- Canvas (latest) : `npm i canvas`
- Puppeteer (latest) : `npm i puppeteer`

You need to provide 3 variables into a file located at `./ressources/config.json` :
- `prefix` : a prefix for the bot
- `welcome_channel` : the ID of the welcome channel
- `count_channel` : the ID of the count channel

You need to provide the bot's token into a `.env` file with this format : 

`BOT_TOKEN=[your_token]`

Finally, you need to download `OdibeeSans-Regular` font into the `ressources` folder.