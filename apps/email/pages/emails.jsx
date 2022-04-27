import { emailService } from "../services/email-services.js"
import { EmailList } from "../cmp/email-list.jsx"
import { EmailSideBar } from "../cmp/email-side-bar.jsx"
import { EmailFilter } from "../cmp/email-filter-header.jsx"


const { Link, Route, Switch } = ReactRouterDOM

export class Emails extends React.Component{


    state = {
        emails: [],
        searchBy: null
    }

    componentDidMount() {

        const emails = emailService.getDefaultEmails()
        this.setState({emails})
        
    }

    loadEmails = () => {
        console.log(this.state.searchBy);
        emailService.query(this.state.searchBy)
            .then(emails => {
                this.setState({ emails })
            })
    }

    onSet = (searchBy) => {
        this.setState({searchBy}, this.loadEmails)
        console.log(this.state.searchBy)
    }





    render() {

        return <section className="email-main">
            <EmailFilter onSet={this.onSet}/>
            <div className="email-core">

                <EmailSideBar/>
                <EmailList emails={this.state.emails} />
            </div>
           </section>
    }
}