import { emailService } from "../services/email-services.js"
import {eventBusService} from "../../../services/event-bus-service.js"
const { Link } = ReactRouterDOM

export class EmailDetail extends React.Component {

    state = {
        email: null,
        title: 'str'

    }

    componentDidMount() {
        this.loadEmail()
        console.log(this.state.email);
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
        console.log({ id });
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
            info: { txt: this.state.email.txt }
        }
        eventBusService.emit('emailToNote',newNote)
    }

    render() {


        if (!this.state.email) return null
        return <section className="email-detail">
           <section className="labels-section">
                {this.state.email.labels.map((label) => <div className={`label-${label}`}>{label}</div>)}
                </section>
            
            <h3>from:  {this.state.email.from}</h3>
            <h3>Subject: {this.state.email.title}</h3>
            <h3>Arrived at: {this.state.email.date.substring(0,10)} </h3>
            <br />
            <p>{this.state.email.txt}</p>
            <br />
            <div className="detail-buttons">
                <Link to="/emails" >
                    <button onClick={() => emailService.moveToTrash(this.state.email.id)}>🗑</button>
                </Link>
                <button onClick={() => this.markAsUnread(this.state.email.id)}>Mark as Unread</button>
                <button onClick={() => this.transformToNote(this.state.email)}>Transform to Note</button>
            </div>

        </section>

    }


}