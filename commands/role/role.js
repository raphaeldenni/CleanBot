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

module.exports = {
  data: new SlashCommandBuilder()
    .setName("role")
    .setDescription(
      "Affiche le nombre de personnes pour chaque rôle de région",
    ),

  async execute(interaction) {
    const roles = await interaction.guild.roles
      .fetch()
      .then((res) => [...res.cache.values()]);

    await interaction.reply({
      embeds: [
        {
          color: 0x2140b6,
          title:
            "**Voici la liste des rôles de régions et la répartition des membres :**",
          description: roles
            .filter((r) => r.name != "@everyone")
            .map((role) => `${role.name} : ${role.members.size}`)
            .join("\n"),
        },
      ],
    });
  },
};
