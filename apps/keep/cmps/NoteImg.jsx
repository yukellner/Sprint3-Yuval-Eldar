
import { noteService } from '../services/note.service.js'



export function NoteImg({ note , loadNotes}) {
    function onDeleteNote() {
        noteService.remove(note.id)
        loadNotes()


    }


    return <section>

        <div className="note-card">

            <div>
                <img src={note.info.url} alt="" />
            </div>
            <h1>{note.info.txt}</h1>
            <a className="delete-note" onClick={onDeleteNote}>X</a>
        </div>
    </section>
}