const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	once: true,
	execute(client, message, count_channel) {
		/*num = parseInt(message.content);

        if (message.author.bot || message.channel.id != count_channel || isNaN(num)) return;
        
        message.delete({timeout: 1});

        message.channel.send({embed : {
            color: '#2140b6',
            description: `:chart_with_upwards_trend: ${num}`,
            footer: ({text: `${message.author.username}`, iconURL: `${message.author.avatarURL()}`})

        }});*/

	},
    
};