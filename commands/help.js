module.exports = {
    name: 'help',
    description: 'Affiche un liste des commandes disponibles',
    execute(message) {
        message.delete({timeout: 1});
        message.reply({embed : {
            color: 0x152975,
            description: '📜 Une liste des commandes disponibles vous a été envoyé en message privé',
        }})
        message.author.createDM().then(channel => {
            channel.send({embed : {
                color: 0x152975,
                title: `\n__Salut ${message.author.username} 👋, les commandes suivantes sont disponibles pour CleanBot :__\n\n`,
                description: '**_help** [*Affiche un liste des commandes disponibles et leurs effets*]\n**_ping** [*Affiche la latence du bot en ms*]',
            }})
        })
    }
}