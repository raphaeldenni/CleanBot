const Discord = require('discord.js');
const Canvas = require('canvas');

const config = require("./config.json");
const welcome_channel = config.welcome_channel

async function newUser () {
	
	const applyText = (canvas, text) => {
		const context = canvas.getContext('2d');
		let fontSize = 70;
	
		do {
			context.font = `${fontSize -= 10}px sans-serif`;
		} while (context.measureText(text).width > canvas.width - 300);
	
		return context.font;
	};
	

	const channel = member.guild.channels.cache.find(ch => ch.name === "text-1");
	if (!channel) return;
	
	const canvas = Canvas.createCanvas(700, 250);
	const context = canvas.getContext('2d');
	
	const background = await Canvas.loadImage('./images/welcome.png');
	context.drawImage(background, 0, 0, canvas.width, canvas.height);
	
	context.strokeStyle = '#74037b';
	context.strokeRect(0, 0, canvas.width, canvas.height);
	
	context.font = '28px sans-serif';
	context.fillStyle = '#ffffff';
	context.fillText('Bienvenue sur le serveur,', canvas.width / 2.5, canvas.height / 3.5);
	
	context.font = applyText(canvas, `${member.displayName}!`);
	context.fillStyle = '#ffffff';
	context.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);
	
	context.beginPath();
	context.arc(125, 125, 100, 0, Math.PI * 2, true);
	context.closePath();
	context.clip();
	
	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	context.drawImage(avatar, 25, 25, 200, 200);
	
	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
	
	channel.send(attachment);
};

module.exports = {
	newUser
}

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