export class NewTodo extends React.Component {

    state = {
        todo: null
    }

    handleChange1 = ({ target }) => {

        this.setState({ todo: {txt: target.value} })

        
        
    }
    
    sendTodo = () => {
        this.props.onAddTodo(this.state.todo)

    }

    render() {
        // onSubmit={this.props.onAddTodo}

        return <section>
           


                <input type="text" className="notes-filter" name="todo" placeholder="add a note" onChange={this.handleChange1} />
                <button onClick={this.sendTodo}>+</button>
            
        </section>
    }
}