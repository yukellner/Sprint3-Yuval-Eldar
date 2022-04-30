
import { noteService } from '../services/note.service.js'





export class TodoLine extends React.Component {

    state = {
        isDone: null,
        footerStyle: null
    }


    componentDidMount() {
        if (this.props.todo.isDone) {

            this.setState({ footerStyle: { textDecorationLine: 'line-through' }, isDone: true })

        }




    }

    onCheckedBox = ({ target }) => {


        // this.state.styling = "backgroundColor: 'black'"



        if (target.checked) {

            this.setState({ footerStyle: { textDecorationLine: 'line-through' }, isDone: true })
            // noteService.updateNote(this.props.note)
        }
        else {


            this.setState({ footerStyle: null, isDone: false })


        }

        setTimeout(() => {
            this.props.todo.isDone = target.checked
            noteService.updateNote(this.props.note)

        }, '100');

        






        target.value = 'off'
        console.log('va', target.value)
    }

    onDeleteTodo = () => {
        noteService.removeTodo(this.props.note.id, this.props.todo.id)
            .then(this.props.loadNotes)



    }


    render() {
        const { footerStyle } = this.state
        console.log('note', this.props.note)

        return <section>






            <input id={this.props.todo.txt} onChange={this.onCheckedBox} type="checkbox" checked={this.state.isDone} />
            <label style={footerStyle} htmlFor={this.props.todo.txt} >{this.props.todo.txt}</label>
            <i className="fa-solid fa-xmark delete-note right" onClick={this.onDeleteTodo}></i>




        </section>


    }
}
