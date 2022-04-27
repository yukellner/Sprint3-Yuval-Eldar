
import { emailService } from "../services/email-services.js"
import { EmailPriview } from "./email-preview.jsx"

export class EmailList extends React.Component {


     
        toggleStar = (ID) => {

                console.log('toggle star', ID);
        
                const emails = this.state.emails
                const index = emails.findIndex((email) => email.id === ID)
                console.log(index);
                emails[index].isStar = !emails[index].isStar
                emailService.updateEmails(emails)
                this.setState({emails})
            }
    




        render( ) {

                const emails = this.props.emails

                        return <section className="email-list">
                                {emails.map((email) => <EmailPriview email={email} key={email.id} toggleStar={this.toggleStar}/> )}
                        
                                </section>
    }

}

