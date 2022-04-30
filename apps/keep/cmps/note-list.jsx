import { noteService } from '../services/note.service.js'
import { NoteTxt } from '../cmps/NoteTxt.jsx'
import { NoteImg } from '../cmps/NoteImg.jsx'
import { NoteTodo } from '../cmps/NoteTodo.jsx'
import { NoteFilter } from '../cmps/note-filter.jsx'
import { NoteAdd } from '../cmps/NoteAdd.jsx'
import {eventBusService} from "../../../services/event-bus-service.js"


export class NoteList extends React.Component {

    state = {
        notes: null,
        filterBy: null
    }
    removeEvent;

    componentDidMount() {
        this.loadNotes()
        this.removeEvent = eventBusService.on('emailToNote', (note) => {
            noteService.saveNote(note)
        })
        eventBusService.on('emailToNote', (note) => {
            noteService.saveNote(note)
        })
        
    }

    // onDeleteNoteb = (id) => {
    //     console.log('to delete id',id)
    //     noteService.remove(id)
    //     this.loadNotes()


    // }




    loadNotes = () => {
        console.log('lodded')
        noteService.query(this.state.filterBy)
            .then(notes => {
                if (!notes) return this.props.history.push('/')
                this.setState({ notes })
            })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadNotes)

        

    }

    
  
  componentDidUpdate(prevProps, prevState) {
    this.removeEvent()
  }


    render() {
        const { notes } = this.state


        if (!notes) return <h1>loading...</h1>
        return <section>

            <NoteFilter onSetFilter={this.onSetFilter}/>
            <NoteAdd loadNotes={this.loadNotes}/>


            <div className="notes-container grid justify-center align-center">




                {notes.map(note => {

                    return <div key={note.id} >
                        {note.type === 'note-txt' && <NoteTxt note={note} loadNotes={this.loadNotes} />}
                        {note.type === 'note-img' && <NoteImg note={note} loadNotes={this.loadNotes} />}
                        {note.type === 'note-todos' && <NoteTodo note={note} loadNotes={this.loadNotes} />}
                        

                    </div>


                })}
            </div>


        </section>
    }
}