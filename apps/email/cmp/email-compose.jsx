import { emailService } from "../services/email-services.js"


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


    render() {
     

        return <from className="compose-form" onSubmit={()=>this.clearForm()}>
            <input type="text" placeholder="To:"  onChange={this.updateTo}/>
            <input type="text" placeholder="Subject:"  onChange={this.updateSubject}/>
            <br />
            <textarea className="compose-txt-input"  onChange={this.updateTxt} name="" id="" cols="30" rows="10"></textarea>
            <div className="compose-buttons">
            <button  onClick={() => emailService.draftMail(this.newEmail)}>Save to Draft</button>
            <button className="compose-send-button" onClick={() => emailService.sendMail(this.newEmail)}>Send</button>
            </div>

        </from>
    }

}



