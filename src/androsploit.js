const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(commands) {
    rl.question('androsploit <> ', (answer) => {

        if (commands.get(answer)) {
            commands.get(answer).run()
        } 

        ask(commands)    
    });
}

module.exports = () => {



    const commands = require('./cHandler')()

    ask(commands)

}