

export function EmailPriview(props) {

    const {email} = props
    const date = email.date.toString().substring(0,11)

    const starClass = (email.isStar)? '' : 'email-not-star'
    const readClass =  (email.isRead)? '' : 'email-not-read'


 

    return <section className="email-priview">
        <p className={starClass} onClick={props.toggleStar}>⭐</p>
        <p className={readClass}>{email.title} </p>
         <p>  Sent At: {date}</p> 
         
    </section>
}