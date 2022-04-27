

export function EmailPriview(props) {

    const {email} = props
    const date = email.date.toString().substring(0,11)
 

    return <section className="email-priview">
        <p>{email.title} </p> <p>  Sent At: {date}</p> 
    </section>
}