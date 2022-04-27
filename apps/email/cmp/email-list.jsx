
// import { emailService } from "../../../services/email-services.js"
import { EmailPriview } from "./email-preview.jsx"

export function EmailList({ emails }) {



        return <section className="email-list">
                {emails.map((email) => <EmailPriview email={email} key={email.id}/> )}
                
        </section>
    }

