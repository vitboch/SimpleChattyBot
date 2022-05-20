const input = require('sync-input')

const bot = {
    name:'Aid',
    birthYear: 2022
}

console.log(`Hello! My name is ${bot.name}.
I was created in ${bot.birthYear}.
Please, remind me your name.`)

const user = input('> ')

console.log(`What a great name you have, ${user}!
Let me guess your age.
Enter remainders of dividing your age by 3, 5 and 7.`)

const remainder3 = input('> ')
const remainder5 = input('> ')
const remainder7 = input('> ')

const age = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105

console.log(`Your age is ${age}; that's a good time to start programming!`)
