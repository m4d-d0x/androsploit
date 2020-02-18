module.exports = {
    name: "help",
    desc: "Shows a list of available commands",
    
    run: (args) => {
        const commands = require('../cHandler')()
        commands.forEach((command) => {
            console.log(command.name + " - " + command.desc)
        })
    }
}