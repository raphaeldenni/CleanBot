module.exports = {
    name: 'helpadmin',
    description: 'Affiche un liste des commandes admins disponibles',
    execute(message,member) {

        message.delete({timeout: 1});

        if (message.member.hasPermission('ADMINISTRATOR')) {
            message.reply({embed : {
                color: 0x2140b6,
                description: '📜 Une liste des commandes admins disponibles vous a été envoyé en message privé',
            }})
            message.author.createDM().then(channel => {
                channel.send({embed : {
                    color: 0x2140b6,
                    title: `\nSalut ${message.author.username} 👋, voici les commandes admins de CleanBot :\n\n`,
                    description: '**_helpadmin** [*Affiche un liste des commandes admins disponibles et leurs effets*]',
                }})
            })
        } else {
            message.reply({embed : {
                color: 0xff0000,
                description: '❌ Vous n\'avez pas la permission d\'utiliser la commande _helpadmin',
            }})
        }
    }
}