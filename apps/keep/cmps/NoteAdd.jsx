import { noteService } from '../services/note.service.js'
import { utilService } from '../services/util.service.js'


const { Link } = ReactRouterDOM

export class NoteAdd extends React.Component {

    state = {
        note: {

            type: 'note-txt',
            isPinned: false,
            info: {
                txt: null,
                url: null,
                title: null,
                style: null,
                label: null,
                todos: [{
                    txt: null, doneAt: null,

                }]
            },




        }
    }
    onSaveNote = (ev) => {
        ev.preventDefault()
        noteService.saveNote(this.state.note)
            .then(() => {
                this.props.loadNotes()
                console.log('saved')
            })
        }
        
        handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ note: { ...prevState.note, info: { ...prevState.note.info, [field]: value } } }))
    }
    
    updateType = (ev) => {
        const type = ev.target.name
        this.setState((prevState) => ({ note: { ...prevState.note,  type: type } }))
        console.log('state', this.state.note)

    }



    render() {

        return <section>

            <div className="add-note-container">

                <form action="" className="notes-form" onSubmit={this.onSaveNote}>

                    <input type="text" className="notes-filter" name="title" placeholder="add a note" onChange={this.handleChange} />
                    <input type="text" className="notes-filter" name="text" placeholder="add a text" />
                    <a onClick={this.updateType} name="note-text">text</a>
                    <a onClick={this.updateType} name="img">img</a>
                    <a onClick={this.updateType} name="todo">todo</a>
                    <ul className="pick-col" ><a>pick a colors</a></ul>
                    <button>add</button>

                </form>
            </div>


        </section>
    }
}