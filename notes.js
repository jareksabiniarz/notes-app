const fs = require('fs')
const chalk = require('chalk')

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
   
    if (notes.length === notesToKeep.length){
        console.log(chalk.green.inverse('No note found!'))
    }
    else{
        console.log(chalk.red.inverse('Note removed!'))
    }

    saveNotes(notesToKeep)
}

const addNote = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) =>  note.title === title) 
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote){   
    notes.push({                    
        title: title,
        body: body
        })
    saveNotes(notes)                
    console.log(chalk.green('New note added!'))
    } else {
        console.log(chalk.red('Note title already exists!'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const findedNote = notes.find((note) =>  note.title === title)
    if (findedNote){
    console.log(chalk.yellow.inverse(findedNote.title) + ' ' + findedNote.body)
    }
    else {
        console.log(chalk.red('No note found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.bold('Your notes: '))
    notes.forEach((note) => {
        console.log(chalk.yellow.bold(note.title))
    })
}

const  saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes= () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    
    catch(e){
        return[]
    }

}

module.exports = {      
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
    }

