import { emailService } from "../services/email-services.js"
import {eventBusService} from "../../../services/event-bus-service.js"
const { Link } = ReactRouterDOM

export class EmailDetail extends React.Component {

    state = {
        email: null,
        title: 'str',
        sentToNote: false


    }

    timeoutID
    

    componentDidMount() {
        this.loadEmail()

     
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadEmail()
        }
    }

    markAsUnread = () => {
        const emails = emailService.getEmails()
        const index = emails.findIndex((email) => email.id === this.state.email.id)
        emails[index].isRead = false
        emailService.updateEmails(emails)
    }


    loadEmail = () => {
        const { id } = this.props.match.params
    
        emailService.getById(id)
            .then(email => {
                if (!email) return this.props.history.push('/')
                this.setState({ email })
            })
    }

    transformToNote = () => {
        const newNote = {
            id: this.state.email.id,
            type: 'note-txt',
            isPinned: false,
            info: { title:this.state.email.title, txt: this.state.email.txt }
        }
        eventBusService.emit('emailToNote', newNote)
        this.sentModal()
    }

    sentModal = () => {
        if (this.timeoutId) clearTimeout(this.timeoutId)
        this.setState({sentToNote: true}, () => {
            this.timeoutID = setTimeout( () => {
            
            this.setState({sentToNote:false})
            clearTimeout(this.timeoutID)}, 2000)
        })
    }

    render() {


        if (!this.state.email) return null
        return <section className="email-detail">
           <section className="labels-section">
                {this.state.email.labels.map((label, idx) => <div key={idx} className={`label-${label}`}>{label}</div>)}
                </section>
            
            <h3>from:  {this.state.email.from}</h3>
            <h3>Subject: {this.state.email.title}</h3>
            <h3>Arrived at: {this.state.email.date.substring(0,10)} </h3>
            <br />
            <p>{this.state.email.txt}</p>
            <br />
            <div className="detail-buttons">
                <Link to="/emails" >
                    <button onClick={() => emailService.moveToTrash(this.state.email.id)}>Move to Trash 🗑</button>
                </Link>
                <button onClick={() => this.markAsUnread(this.state.email.id)}>Mark as Unread</button>
                <button onClick={() => this.transformToNote(this.state.email)}>Transform to Note</button>
            </div>
            {this.state.sentToNote && <div className="sent-modal"> Sent to notes</div>}

        </section>

    }


}