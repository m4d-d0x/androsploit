const fs = require('fs')

module.exports = () => {
    
    var c = new Map();

    const cwd = process.cwd()

    const a = fs.readdirSync(cwd + "/src/commands")
    a.forEach(af=>{const command = require(cwd + "/src/commands/" + af);c.set(command.name, command)})

    return c
}