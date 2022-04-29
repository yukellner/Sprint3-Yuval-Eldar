import { noteService } from '../../services/note.service.js'

const { Link } = ReactRouterDOM


export class NoteEdit extends React.Component {

    state = {
        note: this.props.note


        }
    
        

        handleChange = ({target}) => {

            const field = target.name
            const value = target.value

            this.setState((prevState) => ({ note: { ...prevState.note, info: { ...prevState.note.info, [field]: value } } }))


        }

        onUpdate = () => {

           
                noteService.updateNote(this.state.note)
                .then(() => {
                  })
    
            
        }

        


    render() {

        let { note, closeViewCard } = this.props

        return <section>

            <div className="shown-card" style={this.state.note.info.style}>
                <form>

                <input placeholder={note.info.title}   name="title" onChange={this.handleChange}></input>
                <h2>{note.info.title}</h2>
                <h3>{note.info.txt}</h3>
                <button onClick={this.onUpdate}>update</button>
                </form>
            <button onClick={closeViewCard}>X</button  >
            </div>




        </section>
    }
}