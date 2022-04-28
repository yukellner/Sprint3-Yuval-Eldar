
import { noteService } from '../services/note.service.js'
import { utilService } from '../services/util.service.js'
import { TodoLine } from '../cmps/TodoLine.jsx'




export function NoteTodo({ note, loadNotes }) {
    function onDeleteNote() {
        noteService.remove(note.id)
        loadNotes()


    }


    return <section>
        <div className="note-card">

            {note.info.todos.map(todo => {

                return <div key={utilService.makeId()}>


                    <TodoLine todo={todo} note={note}/>

                    

                </div>


            })}


            <a className="delete-note" onClick={onDeleteNote}>X</a>


        </div>
    </section>
}