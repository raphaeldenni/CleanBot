/*
A bot for the Discord server of the french cleanwalk platform Cleanwalk.org
Copyright (C) 2021-2025  Raphaël DENNI

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// Const of the bot
const { Client, GatewayIntentBits, Collection } = require("discord.js");

const fs = require("node:fs");
const path = require("node:path");

const Canvas = require("@napi-rs/canvas");

require("dotenv").config();

//const config = require("./ressources/config.json");

//Canvas.registerFont('./ressources/OdibeeSans-Regular.ttf', { family: 'Odibee' });

//const welcome_channel = config.welcome_channel;

//const count_channel = config.count_channel;

// Create the client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.commands = new Collection();

// Search for the commands files and add them to a collection
const commands = [];
// Grab all the command folders from the commands directory you created earlier
const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  // Grab all the command files from the commands directory you created earlier
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));

  // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
  for (const file of commandFiles) {
    client.commands.set(file, file);
  }
}

// Search for the events files and add them to a collection
const eventsPath = path.join(__dirname, "events");
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);

  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

// Test command
client.on("message", (message) => {
  if (
    message.content === "!join" &&
    message.member.hasPermission("ADMINISTRATOR") == true
  ) {
    client.emit("guildMemberAdd", message.member);
  }
});

// Connection with the token
let bot_token = process.env.BOT_TOKEN;

client.login(bot_token);
