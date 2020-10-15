const fs = require('fs')
const chalk = require('chalk')

const getNotes = function()
{
    return 'Your notes...'
}

const removeNote =function (title) {
    const notes = loadNotes()
 
    const notesToKeep = notes.filter(function(note){ //creates new array with notes not to be removed
        return note.title !== title //if the tilte is not consistent then keep this note
    })
   
    if (notes.length === notesToKeep.length){
        console.log(chalk.green.inverse('No note found!'))
    }
    else{
        console.log(chalk.red.inverse('Note removed!'))
    }

    saveNotes(notesToKeep)

   
}

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) { //checking if the title is not already used
        return note.title === title  
        }) //filter is array method

    if (duplicateNotes.length === 0){   //if there is no such a title (value is 0)
    notes.push({                    //push method on array argv notes
        title: title,
        body: body
        })
    saveNotes(notes)                //savin the notes right after adding it
    console.log(chalk.green('New note added!'))
    } else {
        console.log(chalk.red('Note title already exists!'))
    }
}

const  saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes= function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    
    catch(e){
        return[]
    }

}

module.exports = {      //export multiple objects from module by exporting an object
    getNotes: getNotes, //property name is not important, here it is the same as value (function) name
    addNote: addNote,
    removeNote: removeNote
    }

