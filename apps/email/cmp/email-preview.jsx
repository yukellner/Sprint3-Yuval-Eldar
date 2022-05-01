import { emailService } from "../services/email-services.js"
const { Link } = ReactRouterDOM

export function EmailPriview(props) {

    const {email} = props
    const date = email.date.toString().substring(0,10)

    const starClass = (email.isStar)? '' : 'email-not-star'
    const readClass =  (email.isRead)? '' : 'email-not-read'


 

    return <section className="email-priview">
                <p className={starClass} onClick={ () => props.toggleStar(email.id)}>⭐</p>
                <Link  to={`/emails/${email.id}`}  className="email-link" onClick={() => props.markRead(email.id) }>
                    <p className={`email-title-priview  ${readClass}`} >{email.title}  </p>
                    <p className={readClass}>{email.from}  </p>
                </Link>
                <p className="date-priview" >{date}</p> 
                {(props.folder === 'trash')? <button className="delete-button" onClick={()=> props.deleteEmail(email.id)}>Delete Email</button> :
                <button className="unread-button" onClick={()=> props.toggleRead(email.id)}>{(email.isRead)? '✉' :' 📜'}</button>
                    }
                </section>
           
}