import { emailService } from "../services/email-services.js"
const { Link } = ReactRouterDOM

export class ComposeEmail extends React.Component {

    state = {
        hi:''
    }
    
 

    updateTo = ({target}) => {
     
        this.newEmail.to = target.value

    }

    updateSubject = ({target}) => {
     
        this.newEmail.title = target.value
       
    }
    updateTxt = ({target}) => {
     
        this.newEmail.txt = target.value
      
    }

    clearForm = () => {
        console.log('clear');
        this.newEmail ={
            to:'',
            title:'',
            txt:'',
            labels:[]
        }
    }



    newEmail = {
        to:'',
        title:'',
        txt:'',
        labels:[]
    }

    addLabel = (label) => {

        if  (this.newEmail.labels.includes(label)) {
            this.newEmail.labels.splice(this.newEmail.labels.indexOf(label), 1)
        }  else this.newEmail.labels.push(label)
        this.setState({hi:''})
    }


    render() {
        
        const lableClassWork = (this.newEmail.labels.includes('work'))? 'label-active' : ''
        const lableClassFun = (this.newEmail.labels.includes('fun'))? 'label-active' : ''
        const lableClassCritical = (this.newEmail.labels.includes('critical'))? 'label-active' : ''
        const lableClassBills = (this.newEmail.labels.includes('bills'))? 'label-active' : ''
        const lableClassMemes = (this.newEmail.labels.includes('memes'))? 'label-active' : ''
        

        return <from className="compose-form" onSubmit={()=>this.clearForm()}>
            <input type="text" placeholder="To:"  onChange={this.updateTo}/>
            <input type="text" placeholder="Subject:"  onChange={this.updateSubject}/>
            <section className="labels-section">
                <div  className={`label-work ${lableClassWork}`} onClick={() => this.addLabel('work')}>Work</div>
                <div className={`label-fun ${lableClassFun}`} onClick={() => this.addLabel('fun')} >Fun</div>
                <div className={`label-critical ${lableClassCritical}`} onClick={() => this.addLabel('critical')}>Critical</div>
                <div className={`label-bills ${lableClassBills}`}onClick={() => this.addLabel('bills')}>Bills</div>
                <div className={`label-memes ${lableClassMemes}`} onClick={() => this.addLabel('memes')}>Memes</div>
            </section>
            <br />
            <textarea className="compose-txt-input"  onChange={this.updateTxt} name="" id="" cols="30" rows="10"></textarea>
            <Link to="/emails" className="compose-buttons">
            <button  onClick={() => emailService.draftMail(this.newEmail)}>Save to Draft</button>
            <button className="compose-send-button" onClick={() => emailService.sendMail(this.newEmail)}>Send</button>
            </Link>

        </from>
    }

}



