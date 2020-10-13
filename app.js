//const fisrtName = require('./utils.js') //  ./is relative path //fisrtName to wyeksportowana wartosc z innego modulu 

// const add = require('./utils.js')
// const sum = add(-4, 2)
// console.log(sum)
//const validator = require('validator') //przyzwanie npm
const chalk = require('chalk')
const yargs = require('yargs')
const myNotes = require('./notes.js')
//const getNotes = myNotes()
//console.log(getNotes)
//console.log(chalk.yellow.inverse('ohoh!')) //ten chalk zainstalowalem folder wyzej, wiec w tym jsonie go nie ma

//console.log(process.argv[2])   //argv argument vector - array, tablica ktora mozna uzupelniac bezposrednio z konsoli

/*const command = process.argv[2]
if(command === 'add'){
    console.log('Adding note!')
} else if(command === 'remove'){
    console.log('Removing note!')
}

//console.log(validator.isEmail('jarek@example.com')) //validator metoda isEmail sprawdza poprawnosc adresu
//console.log(validator.isURL('https://jarek.com')) //validator metoda isEmail sprawdza poprawnosc adresu url
//do git nie wrzuca sie folderu node_modules, ale jest on niezbedny do dzialania modulow
//potrzebne moduly zapisuja sie w jsonach
//po pobraniu kodu i uruchomianiu komendy npm install na podst json zainstaluje potrzebne moduly

*/

//customize yargs version
yargs.version('1.1.0')
//create add command
yargs.command({             //tworzymy obiekt typu komenda yargs
    command: 'add',         //a tu sa jego cechy
    describe: 'add a new note',
    builder: {
        title: { //object
            describe: 'Note title', //objects property
            demandOption: true,      //title is required now
            type: 'string' //type of required value
        },
        body: {
            describe: 'Body object',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
       // console.log(chalk.yellow('Adding a new note with yargs!', argv)) //wywyolanie w konsoli "node app.js add --title "Tytul"
        console.log(chalk.blue('Title: ' + argv.title)) //prints only title property instead of whole argv object
        console.log(chalk.blue.inverse(`Let the ${argv.body} hit the floor!`)) //wow
    }    
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    handler: function(){
        console.log(chalk.blue('Remove the note with yargs!'))
    }
})
// add, remove, read, list

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log(chalk.yellow.inverse('Read your notes with yargs!'))
    }
})

   //create list command
   yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler: function(){
        console.log(chalk.blue.inverse('List your notes with yargs!'))
    }
})

//console.log(yargs.argv)
yargs.parse() //because above there is in each function console.log already