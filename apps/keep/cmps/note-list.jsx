import { noteService } from '../services/note.service.js'
import { NoteTxt } from '../cmps/NoteTxt.jsx'
import { NoteImg } from '../cmps/NoteImg.jsx'
import { NoteTodo } from '../cmps/NoteTodo.jsx'
import { NoteFilter } from '../cmps/note-filter.jsx'
import { NoteAdd } from '../cmps/NoteAdd.jsx'


export class NoteList extends React.Component {

    state = {
        note: null
    }



    render() {
        const notes = noteService.getNotes()

        console.log('notes', notes)

        return <section>

                <NoteFilter />
                <NoteAdd />


            <div className="notes-container grid justify-center align-center">


                {notes.map(note => {

                    return <div key={note.id}>
                        {note.type === 'note-txt' && <NoteTxt note={note} />}
                        {note.type === 'note-img' && <NoteImg note={note} />}
                        {note.type === 'note-todos' && <NoteTodo note={note} />}

                    </div>


                })}
            </div>


        </section>
    }
}