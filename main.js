const input = require('sync-input')

const bot = {
    name:'Aid',
    birthYear: 2022
}

function greet(botName, birthYear) {
    console.log(`Hello! My name is ${botName}.
I was created in ${birthYear}.`)
}

function remindName() {
    console.log('Please, remind me your name.')
    const user = input('> ')
    console.log(`What a great name you have, ${user}!`)
}

function guessAge() {
    console.log(`Let me guess your age.
Enter remainders of dividing your age by 3, 5 and 7.`)

    const remainder3 = input('> ')
    const remainder5 = input('> ')
    const remainder7 = input('> ')

    const age = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105

    console.log(`Your age is ${age}; that's a good time to start programming!`)
}

function count() {
    console.log("Now I will prove to you that I can count to any number you want.");

    let number = Number(input());
    let current = 0;

    while (current <= number) {
        console.log(current + " !");
        current += 1;
    }
}

function test() {
    console.log(`Let's test your programming knowledge.
Why do we use methods?
1. To repeat a statement multiple times.
2. To decompose a program into several small subroutines.
3. To determine the execution time of a program.
4. To interrupt the execution of a program.`)

    while (true) {
        const answer = Number(input())
        if (answer != 2) {
            console.log('Please, try again.')
        } else {
            console.log('Completed, have a nice day!')
            break
        }
    }
}

function end() {
    console.log('Congratulations, have a nice day!')
}

greet(bot.name, bot.birthYear)
remindName()
guessAge()
count()
test()
end()
