import { NewTodo } from './NewTodo.jsx'
import { utilService } from '../../services/util.service.js'
import { ColorPicker } from '../../cmps/viewCard/ColorPicker.jsx'


export class TodosInpt extends React.Component {

    state = {
        todos: [],
        title: ''
    }

    gTodo2

    onAddTodo = (todo) => {


        let gTodos = this.state.todos
        gTodos.push(todo)
        this.setState({ todos: gTodos })
    }

    saveTo = () => {

        this.props.onSaveTodoNote(this.state.title, this.state.todos)

        this.setState({todos: []})

    }

    handleChange = ({target}) => {

        this.setState({title: target.value})

    }





    render() {

        return <section>
            <input placeholder="title" name="title" className="title-inpt t-inpt" onChange={this.handleChange}></input>
            <NewTodo onAddTodo={this.onAddTodo}/>

            {this.state.todos.map(todo => {
                return <h3 key={utilService.makeId()}>{todo.txt}</h3>
            })}

            <button onClick={this.saveTo}>create card</button>
        </section>
    }
}