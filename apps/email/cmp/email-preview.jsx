const { Link } = ReactRouterDOM

export function EmailPriview(props) {

    const {email} = props
    const date = email.date.toString().substring(0,10)

    const starClass = (email.isStar)? '' : 'email-not-star'
    const readClass =  (email.isRead)? '' : 'email-not-read'


 

    return <section className="email-priview">
                <p className={starClass} onClick={ () => props.toggleStar(email.id)}>⭐</p>
                <Link  to={`/emails/${email.id}`}  className="email-link" >
                    <p className={readClass} >{email.title}  </p>
                </Link>
                    <p className={readClass}>{email.from}  </p>
                <p>{date}</p> 
                
                </section>
           
}