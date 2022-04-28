import { emailService } from "../services/email-services.js"
import { EmailList } from "../cmp/email-list.jsx"
import { EmailSideBar } from "../cmp/email-side-bar.jsx"
import { EmailFilter } from "../cmp/email-filter-header.jsx"
import { EmailDetail } from "../cmp/email-detail.jsx"
import { ComposeEmail } from "../cmp/email-compose.jsx"



const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM

export class Emails extends React.Component {


    state = {
        emails: [],
        searchVal: {
            title: '',
            isStar: false,
            isRead: false,
            folder:null,
            lables: []
        },

    }

    componentDidMount() {

        const emails = emailService.getEmails()
        this.setState({ emails })

    }



    loadEmails = () => {
        emailService.query(this.state.searchVal)
            .then(emails => {
                this.setState({ emails })
            })

    }


    handleChange = ({ target }) => {
        const value = target.value
        this.setState((prevState) => ({ searchVal: { ...prevState.searchVal, title: value }, emails: this.state.emails }), () => this.loadEmails())


    }

    starFolder = () => {
        this.setState((prevState) => ({ searchVal: { ...prevState.searchVal, isStar: true }, emails: this.state.emails }), () => this.loadEmails())
       
    }

    navigateFolder = (folder) => {
        this.setState({
            searchVal: {
                title: '',
                isStar: false,
                isRead: false,
                lables: [],
                folder:folder,
            }, emails: this.state.emails
        }, () => this.loadEmails())
       
    }

    sentFolder = () => {
        this.setState({
            searchVal: {
                title: '',
                isStar: false,
                isRead: false,
                lables: [],
                folder:'sent',
            }, emails: this.state.emails
        }, () => this.loadEmails())
    }

    render() {

        return <section className="email-main">
            <EmailFilter handleChange={this.handleChange} />
            <div className="email-core">
                <Link to="/emails" className="side-bar-link"><EmailSideBar
                 starFolder={this.starFolder} navigateFolder={this.navigateFolder} /></Link>
                <section>
                    <Switch>
                        <Route path="/emails/compose" exact >  <ComposeEmail sendMail={emailService.sendMail}/> </Route>
                        <Route path='/emails/:id' render={(props) => <EmailDetail {...props} />} />
                        <Route path="/emails"  > <EmailList emails={this.state.emails} loadEmails={this.loadEmails} isStar={this.state.searchVal.isStar} /> </Route>
                    </Switch>
                </section>
            </div>
        </section>
    }
}