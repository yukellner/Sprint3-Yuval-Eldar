const { Link } = ReactRouterDOM


export class NoteFilter extends React.Component{

   


    render() {

        return <section>
            <label className="label-filter"></label>
            <input type="text" className="notes-filter" />

          
          </section>
    }
}