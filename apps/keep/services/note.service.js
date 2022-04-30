import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'

export const noteService = {
    getById,
    query,
    remove,
    getVendors,
    getNextnoteId,
    getNotes,
    saveNote,
    initialSaveNotes,
    updateNote,
    removeTodo
}

const KEY = 'notesDB'
var gNotes = [
    { id: "n101", type: "note-txt", isPinned: false, info: { style: { backgroundColor: '#FFAEBC' }, title: "to buy home", txt: "the last supermatket was great!!!" } },
    // { id: "n102", type: "note-todos", info: { style: {backgroundColor: 'rgb(251, 231, 198)'} ,title: "missions for today", label: null, todos: [{ txt: 'go to run', doneAt: null, isDone: false, id: 123 }, { txt: "Coding power", doneAt: 187111111, isDone: true, id: 124 },{ txt: "meet a friend", doneAt: 187111111, isDone: true, id: 126 } ] } },
    {
        id: "n103",
        type: "note-todos",
        info: {
            style: { backgroundColor: '#B4F8C8' },
            title: "Get my stuff together",
            label: null,
            todos: [{
                txt: "Get  stuff",
                doneAt: null,
                isDone: false,
                id: 125
            }]
        },
    },
    {
        id: "n110",
        type: "note-todos",
        info: {
            style: { backgroundColor: '#B4F8C8' },
            title: "missions",
            label: null,
            todos: [{
                txt: "water",
                doneAt: null,
                isDone: false,
                id: 126
            },{
                txt: "appels",
                doneAt: null,
                isDone: true,
                id: 134
            },{
                txt: "go home",
                doneAt: null,
                isDone: false,
                id: 1456
            }]
        },
    },
    { id: "n104", type: "note-txt", isPinned: false, info: { style: { backgroundColor: 'rgb(251, 231, 198)' }, title: "hi", txt: "Fullstack Me Baby!" } },
    {
        id: "n133",
        type: "note-todos",
        info: {
            style: { backgroundColor: '#B4F8C8' },
            title: "Get my stuff together",
            label: null,
            todos: [{
                txt: "Get it",
                doneAt: null,
                isDone: false,
                id: 127
            }]
        },
    },
    // { id: "n105", type: "note-todos", isPinned: false, info: { style: {backgroundColor: '#B4F8C8'}, title:"hi" ,txt: "Fullstack Me Baby!" } },
    { id: "n106", type: "note-txt", isPinned: false, info: { style: { backgroundColor: '#A0E7E5' }, title: "hi", txt: "Fullstack Me Baby!" } },
    // { id: "n102", type: "note-img", info: { url: "https://cdn.britannica.com/16/177616-050-0167E767/Casablanca-Morocco.jpg", title: "Bobi and Me" }, style: { backgroundColor: "#00d" } },
]
function initialSaveNotes() {

    let notes = _loadFromStorage()
    if (!notes) _saveToStorage(gNotes)

    return Promise.resolve(notes)


}

function getNotes() {
    let notes = _loadFromStorage()
    return Promise.resolve(notes)
}

function query(filterBy) {
    let notes = _loadFromStorage()
    if (!notes) {
        return
        notes = _createnotes()
        _saveToStorage(notes)
    }

    if (filterBy) {
        let filter = filterBy



        notes = notes.filter(note =>
            (note.type.includes('note-txt') && (note.info.title.includes(filter) || note.info.txt.includes(filter))) ||

            (note.type.includes('note-todos') && note.info.title.includes(filter))
        )





    }

    return Promise.resolve(notes)
}

function getNextnoteId(noteId) {
    const notes = _loadFromStorage()
    const noteIdx = notes.findIndex(note => noteId === note.id)
    const nextnoteIdx = (noteIdx + 1 === notes.length) ? 0 : noteIdx + 1
    return notes[nextnoteIdx].id
}

function getById(noteId) {
    const notes = _loadFromStorage()
    const note = notes.find(note => noteId === note.id)
    return Promise.resolve(note)
}

function remove(noteId) {
    let notes = _loadFromStorage()
    notes = notes.filter(note => note.id !== noteId)
    _saveToStorage(notes)
    return Promise.resolve()
}

function removeTodo(noteId, todoId) {
    let notes = _loadFromStorage()
    let note = notes.find(note => note.id === noteId)
    note.info.todos = note.info.todos.filter(todo => todo.id !== todoId)
    _saveToStorage(notes)
    return Promise.resolve()
}

function saveNote(note) {
    // if (note.id) return _update(note)
    // else 
    return _add(note)
}

function _add(noteToAdd) {
    let notes = _loadFromStorage()
    const note = _createnote(noteToAdd)
    notes = [note, ...notes]
    _saveToStorage(notes)
    return Promise.resolve()
}

function updateNote(noteToUpdate) {
    _update(noteToUpdate)
}

function _update(noteToUpdate) {
    let notes = _loadFromStorage()
    notes = notes.map(note => note.id === noteToUpdate.id ? noteToUpdate : note)
    _saveToStorage(notes)
    return Promise.resolve()
}

function getVendors() {
    return gNotes
}

function _createnote(note) {


    note.id = utilService.makeId()
    gNotes.push(note)
    return note


}

function _createnotes() {
    const notes = []
    for (let i = 0; i < 20; i++) {
        const vendor = gNotes[utilService.getRandomIntInclusive(0, gNotes.length - 1)]
        notes.push(_createnote(vendor))
    }
    return notes
}

function _saveToStorage(notes) {
    storageService.saveToStorage(KEY, notes)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}