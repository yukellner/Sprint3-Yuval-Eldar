const { Link } = ReactRouterDOM
import { noteService } from '../services/note.service.js'
import { NoteList } from '../cmps/note-list.jsx'


export class NoteIndex extends React.Component {

    state = {
        notes: null
    }

    componentDidMount() {
        noteService.initialSaveNotes()
            .then(notes => {
                this.setState({ notes: notes })
                noteService.getNotes()
                    .then(notes => { this.setState({ notes: notes })})
            })


    }

    updateNotes = (notes) => {
        this.setState({ notes: notes })
    }




    render() {

        return <section>


            <NoteList updateNotes={this.updateNotes} />
        </section>
    }
}