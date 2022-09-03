module.exports = {
    name: 'role',
    description: 'Affiche le nombre de personnes pour chaque rôle de région',
    execute: async (message, args) => {

        message.delete({ timeout: 1 });

        const roles = await message.guild.roles.fetch()
            .then(res => [...res.cache.values()]);

        message.reply({
            embed: {
                color: 0x2140b6,
                title: '**Voici la liste des rôles de régions et la répartition des membres :**',
                description: roles.filter(r => r.name != "@everyone").map(role => `${role.name} : ${role.members.size}`).join('\n'),

            }
        });
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