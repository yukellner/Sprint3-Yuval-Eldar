const { Link } = ReactRouterDOM
import { noteService } from '../../services/note.service/js'



export class ColorPicker extends React.Component {

    state = {
        note: null
    }

    colors = ['#FBE7C6', '#B4F8C8', '#A0E7E5', '#FFAEBC']

    handlecolorChange = (color) => {

        const {note, updateBc} = this.props

        updateBc(color)

        // this.setState({ styling: { backgroundColor: color } })
        // this.props.note.info.style = { backgroundColor: ev.target.value }
        // noteService.updateNote(note)
        

    }


    render() {

        return <section>

            <div className="colors-container" >




                {this.colors.map(color =>
                    <div className="color-pic-con" key={color} style={{ backgroundColor: color }} name={color} onClick= {() => this.handlecolorChange(color)}></div>
                )}

            </div>

        </section>
    }
}