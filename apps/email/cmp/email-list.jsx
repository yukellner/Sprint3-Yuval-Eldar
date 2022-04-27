
// import { emailService } from "../../../services/email-services.js"
import { EmailPriview } from "./email-preview.jsx"

export function EmailList(props) {


        const {emails} = props
        return <section className="email-list">
                {emails.map((email) => <EmailPriview email={email} key={email.id} toggleStar={props.toggleStar}/> )}
                
        </section>
    }

