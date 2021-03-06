import { noteService } from '../services/note.service.js'
import { utilService } from '../services/util.service.js'
import { ToolsBar } from '../cmps/ToolsBar.jsx'
import { ImgInpt } from '../cmps/notes-input/ImgInpt.jsx'
import { TodosInpt } from '../cmps/notes-input/TodosInpt.jsx'
import { TextInpt } from '../cmps/notes-input/TextInpt.jsx'
import { ColorPicker } from '../cmps/viewCard/ColorPicker.jsx'
import { LabelPicker } from './viewCard/LabelPicker.jsx'


const { Link } = ReactRouterDOM

export class NoteAdd extends React.Component {
    // gTodo = null
    state = {
        note: {

            type: 'note-txt',
            isPinned: false,
            info: {
                txt: '',
                url: null,
                title: '',
                style: {backgroundColor: 'rgb(251, 231, 198)'},
                labels: [],
                todos: [{
                    txt: '', doneAt: null, isDone: false, id: null

                }]
            },

        },
        btnstyle:{visibility:'visible'}
    }

    updateLable = (label) => {
        alert(label)
        let curLabels = this.state.note.info.labels
        curLabels.push(label)
        this.setState((prevState) => ({ note: { ...prevState.note, info: { ...prevState.note.info, labels: curLabels } } }))

        console.log('state',this.state.note.info.labels)

        


    }

    onSaveTodoNote = (title, todosss) => {


        // let todoss = this.state.note.info.todos

        // todoss = todosss


        // todoss.push(todosss)
        // this.setState({note:todosss})
        this.setState((prevState) => ({ note: { ...prevState.note, info: { ...prevState.note.info, todos: todosss } } }))
        this.setState((prevState) => ({ note: { ...prevState.note, info: { ...prevState.note.info, title: title } } }))

        setTimeout(() => {
            noteService.saveNote(this.state.note)
                .then(() => {
                    this.props.loadNotes()
                })

        }, '500')

    }

    // componentDidMount() {
    //     this.updateBtnShown()

    // }
    onSaveNote = (ev) => {
        ev.preventDefault()
        if (this.state.note.type === 'note-todos') {



        }
        else {


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
        
        
        setTimeout(() => {
            this.updateBtnShown()
          }, 200)
          




    }

    updateBc = (color) => {
        let styling = {backgroundColor: color}
        this.setState((prevState) => ({ note: { ...prevState.note, info: { ...prevState.note.info, style: styling } } }))


    }

    updateBtnShown = () => {
        if(this.state.note.type === 'note-todos') this.setState({btnstyle:{visibility:'hidden'}})
        else this.setState({btnstyle:{visibility:'visible'}})
        
    }



    render() {

        return <section>

            <div className="add-note-container" >
                <div className="notes-form" style={this.state.note.info.style}>

            {/* <LabelPicker updateLable={this.updateLable} note={this.state.note}/> */}

                <form action=""   onSubmit={this.onSaveNote}>

                    {/* <TextInpt/> */}






                    {this.state.note.type && <DynamicCmp type={this.state.note.type} updateLable={this.updateLable}  handleChange={this.handleChange} onSaveTodoNote={this.onSaveTodoNote} />}




                    {/* <ul className="pick-col" ><a>pick a colors</a></ul> */}

                    <button className="add-note" style={this.state.btnstyle}><i className="fa-solid fa-file-circle-plus add-btn"  ></i></button>









                </form>
                <div className="inpt-aside">

                    <ColorPicker className="choose-color" updateBc={this.updateBc}/>
                    <ToolsBar updateType={this.updateType} />
                </div>
                </div>
            </div>


        </section>
    }
}

function DynamicCmp({ type, handleChange, onSaveTodoNote }) {



    switch (type) {

        case 'note-txt':
            return <TextInpt handleChange={handleChange}/>
        case 'note-todos':
            return <TodosInpt handleChange={handleChange} onSaveTodoNote={onSaveTodoNote} />
        case 'note-img':
            return <ImgInpt handleChange={handleChange} />

        default:
            alert('no match')
            return <h1>hi</h1>
    }
}