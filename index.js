// CleanBot#9208 by SlyEyes#5557
// Github : https://github.com/SlyEyes

// Const of the bot
const { Discord, Client, Collection} = require('discord.js');
const fs = require("fs");
require("dotenv").config();
const config = require("./modules/config.json");
const welcome = require("./modules/welcome.js");
const client = new Client();
const prefix = config.prefix
client.commands = new Collection();

// Connection with the token
client.login(process.env.BOT_TOKEN);

// Search for the command file and add it to a collection
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
console.log(commandFiles);

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command)
}
console.log(client.commands);

// Connection established message
client.on('ready', function () {
  console.log("\nCleanBot#9208 connected !");
})

// Status of the bot
client.on("ready", () =>{
  client.user.setPresence({
      status: "online",
      activity: {
          name: `${prefix}help et cleanwalk.org`,
          type: "WATCHING"
  }})
})

// Read the message of the user and execute or not a command
client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  try {
    client.commands.get(command).execute(message);
  } catch (err) {
    message.channel.send({embed : {
      color: 0xff0000,
      description: `❌ La commande "_${command}" n'existe pas ou je n'ai pas la permission d'agir !`,
    }})
  }
});

// Welcome message for new member
client.on('guildMemberAdd', async () => {welcome.newUser})

/*
Copyright 2021 Raphaël DENNI & Cleanwalk.org

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/