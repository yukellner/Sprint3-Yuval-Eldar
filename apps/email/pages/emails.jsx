import { emailService } from "../services/email-services.js"
import { EmailList } from "../cmp/email-list.jsx"
import { EmailSideBar } from "../cmp/email-side-bar.jsx"
import { EmailFilter } from "../cmp/email-filter-header.jsx"
import { EmailDetail } from "../cmp/email-detail.jsx"



const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link} = ReactRouterDOM

export class Emails extends React.Component{


    state = {
        emails: [],
        searchVal:  {
            title:'',
            isStar: null,
            isRead: null,
            lables: []
        },
        selectedEmailID: null

    }

    componentDidMount() {

        const emails = emailService.getEmails()
        this.setState({emails})
        
    }

   

    loadEmails = () => {
        emailService.query(this.state.searchVal)
            .then(emails => {
                this.setState({ emails })
            })
    }


    handleChange = ({target}) => {
        const value = target.value
        this.setState((prevState) => ({ searchVal: { ...prevState.searchVal, title: value } }), this.loadEmails())

        
    }


    selectEmail = (ID) => {
        this.setState({selectedEmailID: ID})
    }

    render() {

        return <section className="email-main">
            <EmailFilter handleChange={this.handleChange}/>
            <div className="email-core">
                <EmailSideBar/>
                <section>
                    <Switch>
                        <Route path='/emails/:id' render={(props) => <EmailDetail {...props}/>}/>
                        <Route path="/emails"  > <EmailList emails={this.state.emails}/> </Route>
                    </Switch>
                </section>
            </div>
           </section>
    }
}