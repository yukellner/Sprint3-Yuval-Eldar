
import { noteService } from '../services/note.service.js'
import { utilService } from '../services/util.service.js'
import { TodoLine } from '../cmps/TodoLine.jsx'
import { ColorPicker } from '../cmps/viewCard/ColorPicker.jsx'




export class NoteTodo extends React.Component {


    state = {
        styling: null,
        todo: null



    }



    onDeleteNote = () => {
        const { note, loadNotes } = this.props
        noteService.remove(note.id)
        loadNotes()


    }

    updateBc = (bcColor) => {



        this.setState({ styling: { backgroundColor: bcColor } })
        this.props.note.info.style = { backgroundColor: bcColor }
        noteService.updateNote(this.props.note)

    }

    onAddTodo = () => {



        this.props.note.info.todos.push(this.state.todo)
        noteService.updateNote(this.props.note)


        this.props.loadNotes()





    }

    handelChange = ({ target }) => {

        let todoToAdd =
        {
            txt: target.value,
            donAt: null,
            isDone: false,
            id: utilService.makeId()
        }



        this.setState({ todo: todoToAdd })

    }



    //  }) {
    render() {
        const { note, loadNotes } = this.props


        return <section>
            <div className="note-card" style={this.props.note.info.style}>
                <div className="main-note-card">
                    <h2>{note.info.title}</h2>


                    {note.info.todos.map(todo => {

                        return <div key={utilService.makeId()}>


                            <TodoLine todo={todo} note={note} loadNotes={loadNotes} />



                        </div>


                    })}
                    <form>

                        <div className="new-todo2">
                            <div>


                                <input type="text" className="new-todo-line" onChange={this.handelChange} />
                            </div>
                            <div>

                                <i className="fa-solid fa-plus" onClick={this.onAddTodo}></i>
                            </div>
                        </div>

                    </form>
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
        </section>
    }
}