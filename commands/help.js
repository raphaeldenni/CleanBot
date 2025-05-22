const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Affiche un liste des commandes disponibles'),

	async execute(interaction) {
		await interaction.reply({embeds : 
            [{
                color: 0x2140b6,
                title: `\n📜 Voici les commandes de CleanBot :\n\n`,
                description: '**/help** [*Affiche un liste des commandes disponibles et leurs effets*]\n**/ping** [*Affiche la latence du bot en ms*]\n**/role** [*Affiche le nombre de personnes connectées des différentes régions*]\n**/infocleanwalk** [*Affiche les cinq prochaines cleanwalk*]',
        
            }],

            ephemeral : false
    
        });

    },
    
};

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