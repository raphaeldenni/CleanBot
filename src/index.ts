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
import { Client, GatewayIntentBits, Collection } from "discord.js";

import fs from "node:fs";
import path from "node:path";

import dotenv from "dotenv";

// const Canvas = require("@napi-rs/canvas");

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

// @ts-ignore
client.commands = new Collection();

const commandsPath = path.join(process.cwd(), "commands");
const commandsFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of commandsFiles) {
  const filePath = path.join(commandsPath, file);
  const { default: command } = await import(filePath);

  // @ts-ignore
  client.commands.set(command.data.name, command);
}

// Search for the events files and add them to a collection
const eventsPath = path.join(process.cwd(), "events");

const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);

  const { default: event } = await import(filePath);

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
dotenv.config();

const bot_token = process.env.BOT_TOKEN;

client.login(bot_token);
