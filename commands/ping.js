module.exports = {
    name: 'ping',
    description: 'Affiche la latence du bot en ms',
    execute(message) {
        message.delete({timeout: 1});
        message.reply({embed : {
            color: 0x00ffff,
            title: 'Pong 🏓',
            description: `Latence du bot : ${Date.now() - message.createdTimestamp}ms`,
        }})
    }
}