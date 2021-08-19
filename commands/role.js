let num1 = message.guild.members.filter(m => m.roles.find(r => r.name === Auvergne-Rhône-Alpes)).size
let num2 = message.guild.members.filter(m => m.roles.find(r => r.name === Bourgogne-Franche-Comté)).size
let num3 = message.guild.members.filter(m => m.roles.find(r => r.name === Bretagne)).size
let num4 = message.guild.members.filter(m => m.roles.find(r => r.name === Centre-Val-De-Loire)).size
let num5 = message.guild.members.filter(m => m.roles.find(r => r.name === Grand-Est)).size
let num6 = message.guild.members.filter(m => m.roles.find(r => r.name === Hauts-de-France)).size
let num7 = message.guild.members.filter(m => m.roles.find(r => r.name === Île-de-France)).size
let num8 = message.guild.members.filter(m => m.roles.find(r => r.name === Nouvelle-Aquitaine)).size
let num9 = message.guild.members.filter(m => m.roles.find(r => r.name === Normandie)).size
let num10 = message.guild.members.filter(m => m.roles.find(r => r.name === Occitanie)).size
let num11 = message.guild.members.filter(m => m.roles.find(r => r.name === Pays-De-La-Loire)).size
let num12 = message.guild.members.filter(m => m.roles.find(r => r.name === PACA)).size
let num13 = message.guild.members.filter(m => m.roles.find(r => r.name === Corse)).size
let num14 = message.guild.members.filter(m => m.roles.find(r => r.name === DROM)).size
let num15 = message.guild.members.filter(m => m.roles.find(r => r.name === COM)).size
let num16 = message.guild.members.filter(m => m.roles.find(r => r.name === Belgique)).size
let num17 = message.guild.members.filter(m => m.roles.find(r => r.name === Luxembourg)).size
let num18 = message.guild.members.filter(m => m.roles.find(r => r.name === Suisse)).size
let num19 = message.guild.members.filter(m => m.roles.find(r => r.name === Allemagne)).size
let num20 = message.guild.members.filter(m => m.roles.find(r => r.name === Other-Countries)).size


module.exports = {
    name: 'role',
    description: 'Affiche le nombre de personnes pour chaque rôle région',
    execute(message) {
        message.delete({timeout: 1});
        message.reply({embed : {
            color: 0x2140b6,
            title: '**Voici la liste des rôles régions et la répartition des membres :**',
            description: `
            **${num1}** : Auvergne-Rhône-Alpes\n
            **${num2}** : Bourgogne-Franche-Comté\n
            **${num3}** : Bretagne\n
            **${num4}** : Centre-Val-De-Loire\n
            **${num5}** : Grand-Est\n
            **${num6}** : Hauts-de-France\n
            **${num7}** : Île-de-France\n
            **${num8}** : Nouvelle-Aquitaine\n
            **${num9}** : Normandie\n
            **${num10}** : Occitanie\n
            **${num11}** : Pays-De-La-Loire\n
            **${num12}** : PACA\n
            **${num13}** : Corse\n
            **${num14}** : DROM\n
            **${num15}** : COM\n
            \n
            **${num16}** : Belgique\n
            **${num17}** : Luxembourg\n
            **${num18}** : Suisse\n
            **${num19}** : Allemagne\n
            **${num20}** : Other Countries`,
        }})
    }
}