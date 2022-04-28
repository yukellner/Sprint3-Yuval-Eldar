import { emailService } from "../services/email-services.js"
const { Link } = ReactRouterDOM

export function  EmailSideBar(props) {


    return <section className="email-side-bar">


        <Link to="/emails/compose" className="compose-link">
        <div className="email-menue-compose">+ Compose </div>
        </Link>
        <div className="email-menue-option" onClick ={()=> props.navigateFolder('inbox')}>Inbox</div>
        <div className="email-menue-option" onClick ={()=> props.navigateFolder('sent')}>Sent</div>
        <div className="email-menue-option" onClick ={props.starFolder}>Starred</div>
        <div className="email-menue-option" onClick ={()=> props.navigateFolder('draft')}>Draft </div>
        <div className="email-menue-option" onClick ={()=> props.navigateFolder('trash')} >Trash</div>
    </section>


}