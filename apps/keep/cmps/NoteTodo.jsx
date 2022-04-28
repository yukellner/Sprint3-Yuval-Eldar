
import { noteService } from '../services/note.service.js'
import { utilService } from '../services/util.service.js'




export function NoteTodo({ note, loadNotes }) {
    function onDeleteNote() {
        noteService.remove(note.id)
        loadNotes()


    }


    return <section>
        <div className="note-card">

            { note.info.todos.map(todo => {

                return <h4 key={utilService.makeId()}>{todo.txt}</h4>

            })}


            <a className="delete-note" onClick={onDeleteNote}>X</a>


        </div>
    </section>
}