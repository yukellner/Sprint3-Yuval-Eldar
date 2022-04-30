import { utilService } from '../../services/util.service.js'



export class NewTodo extends React.Component {
    state = {
        todo: null
    }

    handleChange1 = ({ target }) => {

        this.setState({ todo: {
            txt: target.value,
            doneAt: Date.now(),
            isDone: false, 
            id: utilService.makeId()


        
        } })
        // txt: null, doneAt: null, isDone: false, id: null

        
        
    }
    
    sendTodo = () => {
        this.props.onAddTodo(this.state.todo)

    }

    render() {
        // onSubmit={this.props.onAddTodo}

        return <section>
           


                <input type="text" className="add-todos-inpt" name="todo" placeholder="add todo" onChange={this.handleChange1} />
                <button onClick={this.sendTodo}>+</button>
            
        </section>
    }
}