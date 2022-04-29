const { Link } = ReactRouterDOM
import { noteService } from '../services/note.service.js'
import { NoteList } from '../cmps/note-list.jsx'


export class NoteIndex extends React.Component{

    state = {
        notes: null 
    }

    componentDidMount() {
        noteService.initialSaveNotes()
        this.setState({notes : noteService.getNotes()})
    }

    


    render() {

        return <section>


            <NoteList/>
          </section>
    }
}