const { Link } = ReactRouterDOM


export class NoteFilter extends React.Component{

   
handleChange = ({target}) => {
    this.props.onSetFilter(target.value)
}

    render() {

        return <section>
            <label className="label-filter"></label>
            <input type="text" className="notes-filter" onChange={this.handleChange}/>

          
          </section>
    }
}