// CleanBot#9208 by Raphaël Denni aka SlyEyes#5557
// Github : https://github.com/SlyEyes

// Const of the bot
const { Discord, Client, Permissions, Collection, MessageAttachment} = require('discord.js');

const fs = require("fs");

const Canvas = require('canvas');

const config = require("./ressources/config.json");

Canvas.registerFont('./ressources/OdibeeSans-Regular.ttf', { family: 'Odibee' })

require("dotenv").config();


const intents = ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_PRESENCES']

const client = new Client({intents: intents, ws:{intents: intents}});

const prefix = config.prefix

client.commands = new Collection();

const welcome_channel = config.welcome_channel

const count_channel = config.count_channel

const welcome_off = config.welcome_off

// Connection with the token
client.login(process.env.BOT_TOKEN);

// Search for the commands and modules files and add them to a collection
function fileSearch(folderName) {
  const Files = fs.readdirSync(`./${folderName}`).filter(file => file.endsWith('.js'));
  console.log(Files);

  for (const file of Files) {
    const fileName = require(`./${folderName}/${file}`);
    client.commands.set(fileName.name, fileName);
  }

  console.log(client.commands);

};

fileSearch('commands')
fileSearch('modules')

// Status of the bot
client.on("ready", () =>{
  client.user.setPresence({
      status: "online",
      activity: {
          name: `${prefix}help et cleanwalk.org`,
          type: "WATCHING"
  }});

  console.log("\nCleanBot#9208 connected !");

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
      description: `❌ La commande "${prefix}${command}" n'existe pas ou je n'ai pas la permission d'agir !`,
    }});
    console.log(err);
  }
});

client.on('message', message => {
	if (message.content === '!join' && message.member.hasPermission('ADMINISTRATOR') == true){
		client.emit('guildMemberAdd', message.member);
	}
});

// Welcome message
client.on('guildMemberAdd', async member => {
  client.commands.get('welcome').execute(member, Canvas, MessageAttachment, welcome_channel);
  });

// Count replacement
client.on('message', message => {
  client.commands.get('count_replace').execute(message, count_channel);
});

/*
Copyright 2021-2022 Raphaël DENNI & Cleanwalk.org

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