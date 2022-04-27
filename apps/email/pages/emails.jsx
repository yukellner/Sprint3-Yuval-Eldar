import { emailService } from "../../../services/email-services.js"
import { EmailList } from "../cmp/email-list.jsx"


const { Link } = ReactRouterDOM

export class Emails extends React.Component{


    state = {
        emails: emailService.getDefaultEmails()
    }


    render() {

        return <section>
            
            <EmailList emails={this.state.emails}/>
           </section>
    }
}