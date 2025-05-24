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
import dotenv from "dotenv";

async function getCommands() {
  const commands = [];

  // Grab all the command folders from the commands directory you created earlier
  const foldersPath = path.join(process.cwd(), "commands");
  const commandFolders = fs.readdirSync(foldersPath);

  for (const folder of commandFolders) {
    // Grab all the command files from the commands directory you created earlier
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs
      .readdirSync(commandsPath)
      .filter((file) => file.endsWith(".js"));

    // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file);
      const { default: command } = await import(filePath);

      commands.push(command.data.toJSON());
    }
  }

  return commands;
}

async function setGuildCommands(rest, guildId, commands) {
  if (guildId === undefined) {
    console.warn("A guild ID is not defined.");
    return;
  }

  const clientId = process.env.CLIENT_ID;

  const data = await rest.put(
    Routes.applicationGuildCommands(clientId, guildId),
    { body: commands },
  );

  console.log(
    `Successfully reloaded ${data.length} application (/) commands in guild ${guildId}.`,
  );
}

function sendCommands(commands) {
  const token = process.env.BOT_TOKEN;

  const rest = new REST().setToken(token);

  const guildId = process.env.GUILD_ID;
  const guildIdTest = process.env.GUILD_ID_TEST;

  // and deploy your commands!
  (async () => {
    try {
      console.log(
        `Started refreshing ${commands.length} application (/) commands.`,
      );

      // The put method is used to fully refresh all commands in the guild with the current set
      setGuildCommands(rest, guildIdTest, commands);
      setGuildCommands(rest, guildId, commands);
    } catch (error) {
      // And of course, make sure you catch and log any errors!
      console.error(error);
    }
  })();
}

// Main function
async function main() {
  dotenv.config();

  const commands = await getCommands();

  sendCommands(commands);
}

main();
