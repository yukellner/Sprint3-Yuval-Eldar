const { Link } = ReactRouterDOM
import { noteService } from '../services/note.service.js'
import { NoteList } from '../cmps/note-list.jsx'


export class NoteIndex extends React.Component{

    state = {
        note: null 
    }

    componentDidMount() {
        // noteService.initialSaveNotes()
    }

    


    render() {

        return <section>


            <NoteList/>
          </section>
    }
}