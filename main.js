const input = require('sync-input')

const bot = {
    name:'Aid',
    birthYear: 2022
}

console.log(`Hello! My name is ${bot.name}.
I was created in ${bot.birthYear}.
Please, remind me your name.`)

const user = input('> ')

console.log(`What a great name you have, ${user}!`)
