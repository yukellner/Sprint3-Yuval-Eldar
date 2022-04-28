

export class EmailFilter extends React.Component {

    // state = {
    //     sraechVal: {
    //         title:'',
    //         isStar: null,
    //         isRead: null,
    //         lables: []
    //     }
    // }


    render() {

        return <section className="email-filter">
            <form action="">
                <label htmlFor="">Search:</label>
                <input onChange={this.props.handleChange} type="text" />
                <button>🔍</button>
            </form>
        </section>
    }




}