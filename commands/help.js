module.exports = {
    name: 'help',
    description: 'Affiche un liste des commandes disponibles',
    execute(message, args) {
        message.delete({timeout: 1});
        message.reply({embed : {
            color: 0x2140b6,
            description: '📜 Une liste des commandes disponibles vous a été envoyé en message privé',
        }})
        message.author.createDM().then(channel => {
            channel.send({embed : {
                color: 0x2140b6,
                title: `\nSalut ${message.author.username} 👋, voici les commandes de CleanBot :\n\n`,
                description: '**_help** [*Affiche un liste des commandes disponibles et leurs effets*]\n**_ping** [*Affiche la latence du bot en ms*]\n**_role** [*Affiche le nombre de personnes connectées des différentes régions*]\n**_infocleanwalk** [*Affiche les cinq prochaines cleanwalk*]',
            }})
        })
    }
}

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