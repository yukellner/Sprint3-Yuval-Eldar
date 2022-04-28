
import { emailService } from "../services/email-services.js"
import { EmailPriview } from "./email-preview.jsx"

export class EmailList extends React.Component {



        toggleStar = (ID) => {

                if (this.props.isStar) return
                const emails = emailService.getEmails()
                const index = emails.findIndex((email) => email.id === ID)
                emails[index].isStar = !emails[index].isStar
                emailService.updateEmails(emails)
                this.props.loadEmails()
        }

         markRead = (id) => {
              console.log('read');
              const emails = emailService.getEmails()
              const index = emails.findIndex((email) => email.id === id)
              emails[index].isRead = true
              emailService.updateEmails(emails)
              this.props.loadEmails()
              
            }

        render() {

                const emails = this.props.emails

                return <section className="email-list">
                        {emails.map((email) => <EmailPriview email={email} key={email.id} 
                        toggleStar={this.toggleStar} markRead={this.markRead} />)}

                </section>
        }

}

