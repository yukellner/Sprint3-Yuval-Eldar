

export class EmailDetail extends React.Component {

    render() {

        const email = this.props.email

        return <secion className="email-detail">

            <h3>from:  {email.from}</h3>
            <h3>Subject: {email.subject}</h3>
            <h3>Arrived at:{email.date} </h3>
            <p>{email.txt}</p>
        </secion>

    }

    
}