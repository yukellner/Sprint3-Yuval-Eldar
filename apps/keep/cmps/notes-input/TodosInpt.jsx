import { NewTodo } from './NewTodo.jsx'
import { utilService } from '../../services/util.service.js'
import { ColorPicker } from '../../cmps/viewCard/ColorPicker.jsx'


export class TodosInpt extends React.Component {

    state = {
        todos: []
    }

    gTodo2

    onAddTodo = (todo) => {


        let gTodos = this.state.todos
        gTodos.push(todo)
        this.setState({ todos: gTodos })
    }

    saveTo = () => {

        this.props.onSaveTodoNote(this.state.todos)

        this.setState({todos: []})

    }

    render() {

        return <section>
            {this.state.todos.map(todo => {
                return <h3 key={utilService.makeId()}>{todo.txt}</h3>
            })}
            <NewTodo onAddTodo={this.onAddTodo}/>

            <button onClick={this.saveTo}>create card</button>
        </section>
    }
}