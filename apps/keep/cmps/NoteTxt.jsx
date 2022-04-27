
import { noteService } from '../services/note.service.js'


export function NoteTxt({ note,loadNotes }) {

    function onDeleteNote() {
        noteService.remove(note.id)
        loadNotes()


    }



    return <section>

        <div className="note-card">

            <h1>{note.info.title}</h1>
            <a className="delete-note" onClick={onDeleteNote}>X</a>
        </div>
    </section>
}