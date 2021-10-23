// CleanBot#9208 by SlyEyes#5557
// Github : https://github.com/SlyEyes

// Const of the bot
const { Discord, Client, Collection, Guild} = require('discord.js');
const fs = require("fs");
require("dotenv").config();

const client = new Client();
const config = require("./modules/config.json");
const prefix = config.prefix
client.commands = new Collection();

const Canvas = require('canvas');

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
      description: `❌ La commande "${prefix}${command}" n'existe pas ou je n'ai pas la permission d'agir !`,
    }})
  }
});

// Welcome message for new member
client.on('guildMemberAdd', async member  => {

  const channel = member.guild.channels.cache.find(ch => ch.name === config.welcome_channel);
	if (!channel) return;

  const canvas = Canvas.createCanvas(750, 250);

  const ctx = canvas.getContext('2d');

  const background = await Canvas.loadImage("./modules/images/welcome.png");

  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#161b28";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.font = '70px sans-serif';
  ctx.fillStyle = "#ffffff";
  ctx.fillText(`Bienvenue !`, 50, 40);
	
	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);
	
  ctx.beginPath();

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'custom__image.png');

  await message.channel.send(attachment);

})

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