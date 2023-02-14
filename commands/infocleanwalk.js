const { SlashCommandBuilder } = require('discord.js');
const moment = require('moment');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('infocleanwalk')
		.setDescription('Affiche les cinq prochaines cleanwalks'),

	async execute(interaction, message) {
    // Get cleanwalks data
    let cleanwalks = await fetch('https://cleanwalk-api.herokuapp.com/v1/cleanwalks')
      .then(response => response.json())
      .then(data => data);

    // Reply data with embed
    await interaction.reply({ embeds:
      [{	
          color: 0x2140b6,
          title: `\n🍃 Voici les 5 prochaines cleanwalks :\n\n`,

          fields: [
            {
              name: cleanwalks[0].name,
              value: `**Date :** ${moment.parseZone(cleanwalks[0].date).format("DD-MMM-YY HH:m:s")}\n
              **Lieu :** ${cleanwalks[0].location}\n
              **Maps :** https://www.google.com/maps/@${cleanwalks[0].lat},${cleanwalks[0].lng},15z\n
              **Participants :** ${cleanwalks[0].number_walker}/${cleanwalks[0].number_max_walker}\n
              **Organisateur :** ${cleanwalks[0].leader.name}\n`,
            },
            {
              name: cleanwalks[1].name,
              value: `**Date :** ${moment.parseZone(cleanwalks[1].date).format("DD-MMM-YY HH:m:s")}\n
              **Lieu :** ${cleanwalks[1].location}\n
              **Maps :** https://www.google.com/maps/@${cleanwalks[1].lat},${cleanwalks[1].lng},15z\n
              **Participants :** ${cleanwalks[1].number_walker}/${cleanwalks[1].number_max_walker}\n
              **Organisateur :** ${cleanwalks[1].leader.name}\n`,
            },
            {
              name: cleanwalks[2].name,
              value: `**Date :** ${moment.parseZone(cleanwalks[2].date).format("DD-MMM-YY HH:m:s")}\n
              **Lieu :** ${cleanwalks[2].location}\n
              **Maps :** https://www.google.com/maps/@${cleanwalks[2].lat},${cleanwalks[2].lng},15z\n
              **Participants :** ${cleanwalks[2].number_walker}/${cleanwalks[2].number_max_walker}\n
              **Organisateur :** ${cleanwalks[2].leader.name}\n`,
            },
            {
              name: cleanwalks[3].name,
              value: `**Date :** ${moment.parseZone(cleanwalks[3].date).format("DD-MMM-YY HH:m:s")}\n
              **Lieu :** ${cleanwalks[3].location}\n
              **Maps :** https://www.google.com/maps/@${cleanwalks[3].lat},${cleanwalks[3].lng},15z\n
              **Participants :** ${cleanwalks[3].number_walker}/${cleanwalks[3].number_max_walker}\n
              **Organisateur :** ${cleanwalks[3].leader.name}\n`,
            },
            {
              name: cleanwalks[4].name,
              value: `**Date :** ${moment.parseZone(cleanwalks[4].date).format("DD-MMM-YY HH:m:s")}\n
              **Lieu :** ${cleanwalks[4].location}\n
              **Maps :** https://www.google.com/maps/@${cleanwalks[4].lat},${cleanwalks[4].lng},15z\n
              **Participants :** ${cleanwalks[4].number_walker}/${cleanwalks[4].number_max_walker}\n
              **Organisateur :** ${cleanwalks[4].leader.name}\n`,
            },
            {
              name: 'Plus d\'infos :',
              value: 'https://cleanwalk.org',
            },
          ],

          thumbnail: {
            url: 'https://i.imgur.com/byqdKyp.png',
          },

          footer: {
            text: 'Cleanwalk.org',
            icon_url: 'https://i.imgur.com/byqdKyp.png',
            link: 'https://cleanwalk.org',
          },
          timestamp: new Date(),
      }]
    });
}};
    

//https://www.google.com/maps/@(latitude),(longitude),15z

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