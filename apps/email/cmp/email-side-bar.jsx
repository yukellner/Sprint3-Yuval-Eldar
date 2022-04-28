import { emailService } from "../services/email-services.js"

export function  EmailSideBar(props) {


    return <section className="email-side-bar">

        <div className="email-menue-compose">+ Compose </div>
        <div className="email-menue-option" onClick ={props.inboxFolder}>Inbox</div>
        <div className="email-menue-option">Sent</div>
        <div className="email-menue-option" onClick ={props.starFolder}>Starred</div>
        <div className="email-menue-option">Draft </div>
        <div className="email-menue-option">Trash</div>
    </section>


}