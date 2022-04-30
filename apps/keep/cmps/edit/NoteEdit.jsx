import { noteService } from '../../services/note.service.js'
import {eventBusService} from "../../../services/event-bus-service.js"
import { emailService } from '../../../email/services/email-services.js'

const { Link } = ReactRouterDOM


export class NoteEdit extends React.Component {

    state = {
        note: this.props.note,
        sentToEmails:false


    }
     
    timeoutID


    handleChange = ({ target }) => {

        const field = target.name
        const value = target.value

        this.setState((prevState) => ({ note: { ...prevState.note, info: { ...prevState.note.info, [field]: value } } }))


    }

    onUpdate = () => {


        noteService.updateNote(this.state.note)
            .then(() => {
            })


    }


    transformToEmail = () => {

        const newEmail = {
            to: 'you@gmail.com',
            from: 'notes@missNotes.com',
            date: new Date(),
            id: emailService.makeId(), 
            title: this.props.note.info.title,
            folder: 'inbox',
            labels: [],
            isStar: false,
            isRead: false,
            txt: this.props.note.info.txt   
        }
        eventBusService.emit('noteToEmail', newEmail)
        this.sentModal()

    }

    sentModal = () => {
        if (this.timeoutId) clearTimeout(this.timeoutId)
        this.setState({sentToEmails: true}, () => {
            this.timeoutID = setTimeout( () => {
            
            this.setState({sentToEmails:false})
            clearTimeout(this.timeoutID)}, 2000)
        })
    }


    render() {

        let { note, closeViewCard } = this.props

        return <section>

            <div className="shown-card" style={this.state.note.info.style}>
                <form>

                    <div className="flex">


                        <h2>header</h2> <input placeholder={note.info.title} name="title" onChange={this.handleChange}></input>
                    </div>
                    <div className="flex">

                        <h3>text</h3> <input placeholder={note.info.txt} name="txt" onChange={this.handleChange}></input>
                    </div>

                    <h3>{note.info.txt}</h3>
                    <button onClick={this.onUpdate}>update</button>
                </form>
                <button onClick={closeViewCard}>X</button  >
                <button onClick={this.transformToEmail}>Send as Email ✉</button  >
            </div>
            {this.state.sentToEmails && <div className="sent-to-emails-modal"> Sent as Email</div>}



        </section>
    }
}