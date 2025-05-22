// CleanBot#9208 by Raphaël Denni aka SlyEyes#5557
// Github : https://github.com/SlyEyes

// Const of the bot
const { Client, GatewayIntentBits, Collection} = require('discord.js');

const fs = require("node:fs");
const path = require('node:path');

const Canvas = require('@napi-rs/canvas');

const config = require("./ressources/config.json");

//Canvas.registerFont('./ressources/OdibeeSans-Regular.ttf', { family: 'Odibee' });

require("dotenv").config();

const welcome_channel = config.welcome_channel;

const count_channel = config.count_channel;


// Create the client
const client = new Client({ 
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers
		
	] });

client.commands = new Collection();


// Search for the commands files and add them to a collection
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);

	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);

	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);

	}

};

// Search for the events files and add them to a collection
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

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
client.on('message', message => {
	if (message.content === '!join' && message.member.hasPermission('ADMINISTRATOR') == true){
		client.emit('guildMemberAdd', message.member);
	}
});

// Connection with the token
client.login(process.env.BOT_TOKEN);


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