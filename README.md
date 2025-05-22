# CleanBot
A bot for the [Discord server](https://discord.gg/S7ADp8AEYA) of the french cleanwalk platform [Cleanwalk.org](https://cleanwalk.org)

## Dependencies
- Discord.js (v14)
- Dotenv (latest)
- @napi-rs/canvas (latest)
- Moment.js (latest)

The project use the **PNPM** package manager!

## Environment

3 variables are required to be into a file located at `./ressources/config.json` :
- `clientId` : the client ID of your bot
- `guildId` : the ID of the guild where the bot will be used
- `welcome_channel` : the ID of the welcome channel
- `count_channel` : the ID of the count channel

The project use a `.env` file for the token :

`BOT_TOKEN=[your_token]`
