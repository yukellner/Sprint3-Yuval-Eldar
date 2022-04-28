
import { noteService } from '../services/note.service.js'
import { utilService } from '../services/util.service.js'
import { TodoLine } from '../cmps/TodoLine.jsx'
import { ColorPicker } from '../cmps/viewCard/ColorPicker.jsx'




export class NoteTodo extends React.Component {


    state = {
        styling: null
    }


    onDeleteNote = () => {
        const { note, loadNotes } = this.props
        noteService.remove(note.id)
        loadNotes()


    }

    updateBc = (bcColor) => {


        // console.log('color', ev.target.value)

        this.setState({ styling: { backgroundColor: bcColor } })
        this.props.note.info.style = { backgroundColor: bcColor }
        noteService.updateNote(this.props.note)

    }



    //  }) {
    render() {
        const { note, loadNotes } = this.props


        return <section>
            <div className="note-card" style={this.props.note.info.style}>
                <div className="main-note-card">


                    {note.info.todos.map(todo => {

                        return <div key={utilService.makeId()}>


                            <TodoLine todo={todo} note={note} />



                        </div>


                    })}

                </div>



                <div className="footer-note-card">

                    <i class="fa-solid fa-xmark delete-note" onClick={this.onDeleteNote}></i>
                    

                    <div>
                        <ColorPicker className="choose-color"  note={note} updateBc={this.updateBc}/>
                    {/* <i className="fa-solid fa-palette" /> */}
                        {/* <input type="color"  onChange={this.updateBc} /> */}
                    </div>

                </div>
            </div>
        </section>
    }
}