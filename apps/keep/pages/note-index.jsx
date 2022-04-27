const { Link } = ReactRouterDOM
import { noteService } from '../services/note.service.js'
import { NoteList } from '../cmps/note-list.jsx'


export class NoteIndex extends React.Component{

    state = {
        note: null 
    }


    render() {

        return <section>

            <h1>hello</h1>

            <NoteList/>
        <h1 className="keep-container">keep</h1>
          </section>
    }
}