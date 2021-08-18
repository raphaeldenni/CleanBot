module.exports = {
    name: 'help',
    description: 'Affiche un liste des commandes disponibles',
    execute(message) {
        message.delete({timeout: 1});
        message.reply({embed : {
            color: 0x2140b6,
            description: '📜 Une liste des commandes disponibles vous a été envoyé en message privé',
        }})
        message.author.createDM().then(channel => {
            channel.send({embed : {
                color: 0x2140b6,
                title: `\nSalut ${message.author.username} 👋, voici les commandes de CleanBot :\n\n`,
                description: '**_help** [*Affiche un liste des commandes disponibles et leurs effets*]\n**_ping** [*Affiche la latence du bot en ms*]',
            }})
        })
    }
}