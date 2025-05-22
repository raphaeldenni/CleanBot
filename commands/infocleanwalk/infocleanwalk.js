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

const { SlashCommandBuilder } = require("discord.js");
const moment = require("moment");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("infocleanwalk")
    .setDescription("Affiche les cinq prochaines cleanwalks"),

  async execute(interaction, message) {
    // Get cleanwalks data
    let cleanwalks = await fetch(
      "https://cleanwalk-api.herokuapp.com/v1/cleanwalks",
    )
      .then((response) => response.json())
      .then((data) => data);

    // Reply data with embed
    await interaction.reply({
      embeds: [
        {
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
              name: "Plus d'infos :",
              value: "https://cleanwalk.org",
            },
          ],

          thumbnail: {
            url: "https://i.imgur.com/byqdKyp.png",
          },

          footer: {
            text: "Cleanwalk.org",
            icon_url: "https://i.imgur.com/byqdKyp.png",
            link: "https://cleanwalk.org",
          },
          timestamp: new Date(),
        },
      ],
    });
  },
};
