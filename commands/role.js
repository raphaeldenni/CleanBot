module.exports = {
    name: 'role',
    description: 'Affiche le nombre de personnes pour chaque rôle de région',
    execute(message) {
        message.delete({timeout: 1});
        message.reply({embed : {
            color: 0x2140b6,
            title: '**Voici la liste des rôles de régions et la répartition des membres :**',
            description: `
            **${message.guild.roles.cache.find(role => role.name === "Auvergne-Rhône-Alpes").size()}** : Auvergne-Rhône-Alpes\n
            **${message.guild.roles.cache.find(role => role.name === "Bourgogne-Franche-Comté").size()}** : Bourgogne-Franche-Comté\n
            **${message.guild.roles.cache.find(role => role.name === "Bretagne").size()}** : Bretagne\n
            **${message.guild.roles.cache.find(role => role.name === "Centre-Val-De-Loire").size()}** : Centre-Val-De-Loire\n
            **${message.guild.roles.cache.find(role => role.name === "Grand-Est").size()}** : Grand-Est\n
            **${message.guild.roles.cache.find(role => role.name === "Hauts-de-France").size()}** : Hauts-de-France\n
            **${message.guild.roles.cache.find(role => role.name === "Île-de-France").size()}** : Île-de-France\n
            **${message.guild.roles.cache.find(role => role.name === "Nouvelle-Aquitaine").size()}** : Nouvelle-Aquitaine\n
            **${message.guild.roles.cache.find(role => role.name === "Normandie").size()}** : Normandie\n
            **${message.guild.roles.cache.find(role => role.name === "Occitanie").size()}** : Occitanie\n
            **${message.guild.roles.cache.find(role => role.name === "Pays-De-La-Loire").size()}** : Pays-De-La-Loire\n
            **${message.guild.roles.cache.find(role => role.name === "PACA").size()}** : PACA\n
            **${message.guild.roles.cache.find(role => role.name === "Corse").size()}** : Corse\n
            **${message.guild.roles.cache.find(role => role.name === "DROM").size()}** : DROM\n
            **${message.guild.roles.cache.find(role => role.name === "COM").size()}** : COM\n
            \n
            **${message.guild.roles.cache.find(role => role.name === "Belgique").size()}** : Belgique\n
            **${message.guild.roles.cache.find(role => role.name === "Luxembourg").size()}** : Luxembourg\n
            **${message.guild.roles.cache.find(role => role.name === "Suisse").size()}** : Suisse\n
            **${message.guild.roles.cache.find(role => role.name === "Allemagne").size()}** : Allemagne\n
            **${message.guild.roles.cache.find(role => role.name === "Other Countries").size()}** : Other Countries`,
        }})
    }
}