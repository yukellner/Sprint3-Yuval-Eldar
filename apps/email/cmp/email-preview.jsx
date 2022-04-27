

export function EmailPriview(props) {

    return <section className="email-priview">
        <p>title: {props.email.title}</p> <p>sent at: {props.email.date} </p>
    </section>
}