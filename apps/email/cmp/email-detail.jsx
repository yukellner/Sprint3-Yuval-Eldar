import { emailService } from "../services/email-services.js"
const { Link } = ReactRouterDOM

export class EmailDetail extends React.Component {

    state = {
        email:null,
        title: 'str'        

    }

    componentDidMount() {
        this.loadEmail() 
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadEmail()
        }
    }




    loadEmail = () => {
        const {id} = this.props.match.params
        console.log({id});
        emailService.getById(id)
        .then(email => {
            if (!email) return this.props.history.push('/')
            this.setState({ email})
        })
    }

    render() {

        
        if (!this.state.email) return null
        return <section className="email-detail">
            {/* <p>{this.state.email.id} </p> */}
            <div>
            {this.state.email.labels && this.state.email.labels.map((label) => <div className={`label-${label}`}>{label}</div> )} 
            </div>
            <h3>from:  {this.state.email.from}</h3>
            <h3>Subject: {this.state.email.subject}</h3>
            <h3>Arrived at:{this.state.email.date} </h3>
            <p>{this.state.email.txt}</p>

            {/* <Link  >
            <button onClick={this.moveToTrash(email.id)}>🗑</button>
            </Link> */}

        </section>

    }

    
}