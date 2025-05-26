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

import { Canvas } from "@napi-rs/canvas";
import { Events, Client, GuildMember } from "discord.js";

export default {
  name: Events.GuildMemberAdd,
  once: true,
  execute: async (
    client: Client,
    member: GuildMember,
    Canvas: Canvas,
    MessageAttachment: any,
    welcome_channel: string,
  ) => {
    /// Destination channel
    const channel = member.guild.channels.cache.find(
      (ch) => ch.id === welcome_channel,
    );
    if (!channel) return;

    /// Create a new canva
    // @ts-ignore
    const canvas = Canvas.createCanvas(700, 350);
    const ctx = canvas.getContext("2d");

    /// Select a background
    // @ts-ignore
    const background = await Canvas.loadImage(
      "./ressources/images/welcome.png",
    );
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    /// Welcome message
    // Slightly smaller text placed above the member's display name
    ctx.font = '50px "Odibee"';
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Bienvenue", canvas.width / 2.65, canvas.height / 5.0);

    // Add an exclamation point here and below
    ctx.font = '80px "Odibee"';
    ctx.fillStyle = "#fc8d34";
    ctx.fillText(
      `${member.displayName} !`,
      canvas.width / 2.4,
      canvas.height / 2.2,
    );

    /// Draw user avatar
    ctx.lineWidth = 7;
    ctx.strokeStyle = "#fc8d34";
    ctx.beginPath();
    ctx.arc(125, 125, 110, 10.5, Math.PI * 2, true);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    // @ts-ignore
    const avatar = await Canvas.loadImage(
      // @ts-ignore
      member.user.displayAvatarURL({ format: "png" }),
    );
    ctx.drawImage(avatar, 25, 25, 200, 200);

    /// Send the message
    const attachment = new MessageAttachment(
      canvas.toBuffer(),
      "welcome-image.png",
    );

    // Classic version
    // channel.send(`Bienvenue ${member} ! <:bvn:978229351738900611> <:cw:978229351738900611>\nNous sommes maintenant **${member.guild.memberCount}** sur **${member.guild.name}** !\n*N'hésite pas à te présenter dans le salon <#978229351738900611> et à aller prendre d'autres rôles dans le salon <#978229351738900611>*`, attachment);

    // Embed version
    // @ts-ignore
    channel.send({
      embed: {
        color: "#0000ff",
        description: `Bienvenue ${member} ! <:bvn:978229351738900611> <:cw:978229351738900611>\nN'hésite pas à **te présenter** dans le salon <#978229351738900611> et à aller prendre **des rôles** dans le salon <#978229351738900611>.\n*Nous sommes maintenant **${member.guild.memberCount}** sur **${member.guild.name}** !*`,
      },
    });

    // @ts-ignore
    channel.send(attachment);
  },
};
