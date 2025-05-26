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

import { REST, Routes } from "discord.js";

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function getCommands() {
  const commands = [];

  // Grab all the command folders from the commands directory you created earlier
  const commandsPath = path.join(__dirname, "commands");
  const commandsFile = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));

  for (const file of commandsFile) {
    const filePath = path.join(commandsPath, file);
    const { default: command } = await import(filePath);

    commands.push(command.data.toJSON());
  }

  if (commands.length === 0) {
    console.warn("No commands found. Guild(s) commands will not be set.");
  }

  return commands;
}

async function setGuildCommands(guildId: string | undefined, commands: any[]) {
  if (guildId === undefined) {
    console.warn("A guild ID is not defined.");
    return;
  }

  const token: string | undefined = process.env.BOT_TOKEN;
  const clientId: string | undefined = process.env.CLIENT_ID;

  if (token === undefined || clientId === undefined) {
    console.error("Bot credentials are not defined.");
    return;
  }

  const rest = new REST().setToken(token);
  let data: any[] | unknown;

  try {
    data = await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: commands,
    });
  } catch (error) {
    console.error("Error while setting guild commands:", error);
    return;
  }

  if (!Array.isArray(data)) {
    console.error("Unexpected response format:", data);
    return;
  }

  console.log(
    `Successfully reloaded ${data.length} application (/) commands in guild ${guildId}.`,
  );
}

function sendCommands(commands: any[]) {
  const guildId = process.env.GUILD_ID;
  const guildIdTest = process.env.GUILD_ID_TEST;

  console.log(
    `Started refreshing ${commands.length} application (/) commands.`,
  );

  setGuildCommands(guildIdTest, commands);
  setGuildCommands(guildId, commands);
}

// Main function
async function main() {
  dotenv.config();

  const commands = await getCommands();

  sendCommands(commands);
}

main();
