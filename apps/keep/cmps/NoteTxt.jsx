
import { noteService } from '../services/note.service.js'
import { ColorPicker } from '../cmps/viewCard/ColorPicker.jsx'
import { NoteEdit } from '../cmps/edit/NoteEdit.jsx'


export class NoteTxt extends React.Component {

    state = {
        styling: null,
        viewIsOn: false
    }

    onDeleteNote = () => {
        const { note, loadNotes } = this.props
        noteService.remove(note.id)
        loadNotes()
        // noteService.remove(note.id)
        // loadNotes()


    }

    updateBc = (bcColor) => {





        this.setState({ styling: { backgroundColor: bcColor } })
        this.props.note.info.style = { backgroundColor: bcColor }
        noteService.updateNote(this.props.note)

    }

    viewCard = () => {
        this.setState({viewIsOn : true})

    }

    closeViewCard = () => {
        this.setState({viewIsOn : false})


    }



    render() {
        const { note, loadNotes } = this.props

        return <section>
            <div className="note-card"  style={note.info.style}>


                <div className="main-note-card" onClick={this.viewCard}>

                    <h2>{note.info.title}</h2>
                    <h3>{note.info.txt}</h3>


                </div>
                <div className="footer-note-card">

                    <i className="fa-solid fa-xmark delete-note" onClick={this.onDeleteNote}></i>


                    <div>
                        <ColorPicker className="choose-color" note={note} updateBc={this.updateBc} />
                        {/* <i className="fa-solid fa-palette" /> */}
                        {/* <input type="color"  onChange={this.updateBc} /> */}
                    </div>

                </div>
            </div>

            {this.state.viewIsOn && <NoteEdit note={note} closeViewCard={this.closeViewCard} loadNotes={loadNotes}/>}
        </section>
    }
}