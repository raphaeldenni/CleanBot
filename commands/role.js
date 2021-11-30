module.exports = {
    name: 'role',
    description: 'Affiche le nombre de personnes pour chaque rôle de région',
    execute: async (message) => {

        message.delete({ timeout: 1 });

        const roles = await message.guild.roles.fetch()
            .then(res => [...res.cache.values()]);

        message.reply({
            embed: {
                color: 0x2140b6,
                title: '**Voici la liste des rôles de régions et la répartition des membres actuellement en ligne :**',
                description: roles.filter(r => r.name != "@everyone").map(role => `${role.name} : ${role.members.size}`).join('\n'),

            }
        });
    }
}