module.exports = {
    name: 'role',
    description: 'Affiche le nombre de personnes pour chaque rôle de région',
    execute(message) {
        message.delete({timeout: 1});
        message.reply({embed : {
            color: 0x2140b6,
            title: '**Voici la liste des rôles de régions et la répartition des membres :**',
            description: `
            **${message.guild.roles.cache.find(role => role.name === "Auvergne-Rhône-Alpes")}** : Auvergne-Rhône-Alpes\n
            **${message.guild.roles.cache.find(role => role.name === "Bourgogne-Franche-Comté")}** : Bourgogne-Franche-Comté\n
            **${message.guild.roles.cache.find(role => role.name === "Bretagne")}** : Bretagne\n
            **${message.guild.roles.cache.find(role => role.name === "Centre-Val-De-Loire")}** : Centre-Val-De-Loire\n
            **${message.guild.roles.cache.find(role => role.name === "Grand-Est")}** : Grand-Est\n
            **${message.guild.roles.cache.find(role => role.name === "Hauts-de-France")}** : Hauts-de-France\n
            **${message.guild.roles.cache.find(role => role.name === "Île-de-France")}** : Île-de-France\n
            **${message.guild.roles.cache.find(role => role.name === "Nouvelle-Aquitaine")}** : Nouvelle-Aquitaine\n
            **${message.guild.roles.cache.find(role => role.name === "Normandie")}** : Normandie\n
            **${message.guild.roles.cache.find(role => role.name === "Occitanie")}** : Occitanie\n
            **${message.guild.roles.cache.find(role => role.name === "Pays-De-La-Loire")}** : Pays-De-La-Loire\n
            **${message.guild.roles.cache.find(role => role.name === "PACA")}** : PACA\n
            **${message.guild.roles.cache.find(role => role.name === "Corse")}** : Corse\n
            **${message.guild.roles.cache.find(role => role.name === "DROM")}** : DROM\n
            **${message.guild.roles.cache.find(role => role.name === "COM")}** : COM\n
            \n
            **${message.guild.roles.cache.find(role => role.name === "Belgique")}** : Belgique\n
            **${message.guild.roles.cache.find(role => role.name === "Luxembourg")}** : Luxembourg\n
            **${message.guild.roles.cache.find(role => role.name === "Suisse")}** : Suisse\n
            **${message.guild.roles.cache.find(role => role.name === "Allemagne")}** : Allemagne\n
            **${message.guild.roles.cache.find(role => role.name === "Other Countries")}** : Other Countries`,
        }})
    }
}