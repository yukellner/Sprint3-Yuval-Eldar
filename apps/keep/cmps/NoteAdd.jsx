import { noteService } from '../services/note.service.js'
import { utilService } from '../services/util.service.js'
import { ToolsBar } from '../cmps/ToolsBar.jsx'
import { ImgInpt } from '../cmps/notes-input/ImgInpt.jsx'
import { TodosInpt } from '../cmps/notes-input/TodosInpt.jsx'
import { TextInpt } from '../cmps/notes-input/TextInpt.jsx'
import { ColorPicker } from '../cmps/viewCard/ColorPicker.jsx'


const { Link } = ReactRouterDOM

export class NoteAdd extends React.Component {
    // gTodo = null
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
                    txt: null, doneAt: null, isDone: false, id: null

                }]
            },

        }
    }

    onSaveTodoNote = (todosss) => {

        console.log('todos for save', todosss)

        // let todoss = this.state.note.info.todos

        // todoss = todosss

        
        // todoss.push(todosss)
        // this.setState({note:todosss})
        this.setState((prevState) => ({ note: { ...prevState.note, info: { ...prevState.note.info, todos: todosss } } }))

        setTimeout(() => {
            noteService.saveNote(this.state.note)
            .then(() => {
                this.props.loadNotes()
                console.log('state',this.state)
            })

        },'500')

    }
    onSaveNote = (ev) => {
        ev.preventDefault()
        if (this.state.note.type === 'note-todos') {



        }
        else{

            
            noteService.saveNote(this.state.note)
            .then(() => {
                this.props.loadNotes()
            })
        }
    }

    handleChange = ({ target }) => {

        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        if (field != 'todo') {

            this.setState((prevState) => ({ note: { ...prevState.note, info: { ...prevState.note.info, [field]: value } } }))
        }
        else this.gTodo = target.value


    }

    updateType = (ev) => {
        const type = ev.target.name
        this.setState((prevState) => ({ note: { ...prevState.note, type: type } }))




    }



    render() {

        return <section>

            <div className="add-note-container">

                <form action="" className="notes-form" onSubmit={this.onSaveNote}>

                    {/* <TextInpt/> */}

                    <ToolsBar updateType={this.updateType} />

                    {this.state.note.type && <DynamicCmp  type={this.state.note.type} handleChange={this.handleChange} onSaveTodoNote={this.onSaveTodoNote}/>}




                    {/* <ul className="pick-col" ><a>pick a colors</a></ul> */}
                    <ColorPicker className="choose-color"/>

                    <button className="add-note" ><i class="fa-solid fa-file-circle-plus"></i></button>



                  


                    

                    
                </form>
            </div>


        </section>
    }
}

function DynamicCmp({ type, handleChange ,onSaveTodoNote}) {


    switch (type) {
        case 'note-txt':
            return <TextInpt  handleChange={handleChange} />
        case 'note-todos':
            return <TodosInpt handleChange={handleChange} onSaveTodoNote={onSaveTodoNote}/>
        case 'note-img':
            return <ImgInpt handleChange={handleChange} />

    }
}