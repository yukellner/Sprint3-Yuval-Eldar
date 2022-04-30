const { Link } = ReactRouterDOM


export class NoteFilter extends React.Component{

   
handleChange = ({target}) => {
    this.props.onSetFilter(target.value)
}

    render() {

        return <section className="container-filter">
            <label className="label-filter"></label>
            <input type="text" className="notes-filter" placeholder="search" onChange={this.handleChange}/>

          
          </section>
    }
}