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

import { Events } from "discord.js";

export default {
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
