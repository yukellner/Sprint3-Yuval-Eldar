import { emailService } from "../../../services/email-services.js"
import { EmailList } from "../cmp/email-list.jsx"
import { EmailSideBar } from "../cmp/email-side-bar.jsx"
import { EmailFilter } from "../cmp/email-filter-header.jsx"


const { Link } = ReactRouterDOM

export class Emails extends React.Component{


    state = {
        emails: emailService.getDefaultEmails()
    }


    render() {

        return <section>
            <EmailFilter/>
            <EmailSideBar/>
            <EmailList emails={this.state.emails}/>
           </section>
    }
}