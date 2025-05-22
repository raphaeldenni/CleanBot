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
    .setName("helpadmin")
    .setDescription("Affiche un liste des commandes admins disponibles")
    .setDefaultMemberPermissions(0),

  async execute(interaction) {
    await interaction.reply({
      embeds: [
        {
          color: 0x2140b6,
          title: `\n📜 Voici les commandes admins de CleanBot :\n\n`,
          description:
            "**/help** [*Affiche un liste des commandes disponibles et leurs effets*]\n**/ping** [*Affiche la latence du bot en ms*]\n**/role** [*Affiche le nombre de personnes connectées des différentes régions*]\n**/infocleanwalk** [*Affiche les cinq prochaines cleanwalk*]",
        },
      ],

      ephemeral: true,
    });
  },
};
