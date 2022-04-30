import { noteService } from '../../services/note.service/js'



export class LabelPicker extends React.Component {

    state = {
        note: null,
        btnWorkStyle: {backgroundColor: 'grey'},
        btnfunStyle: {backgroundColor: 'grey'},
        btnsportStyle: {backgroundColor: 'grey'}
    }

    lables = ['work', 'fun', 'sport']

    

    handleLabelChange = (label) => {

        const {note, updateLable} = this.props

        updateLable(label)

        // this.setState({ styling: { backgroundColor: color } })
        // this.props.note.info.style = { backgroundColor: ev.target.value }
        // noteService.updateNote(note)
        

    }


    render() {

        return <section>

            <div className="labels-container" >






                {this.lables.map(lable =>
                    <button className="btn-label" key={lable} style={this.state.btnStyle}  name={lable} onClick= {() => this.handleLabelChange(lable)}>{lable}</button>
                )}

            </div>

        </section>
    }
}