

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

        return <section >
            <form action="" className="email-filter-form">
                <div className="miss-email-filter-header">≡  MissEmail   📬</div>
                <div>
                    <label htmlFor="">Search:</label>
                    <input onChange={this.props.handleChange} type="text" />
                </div>
                <select name="" id="" onChange={this.props.sortBy}>
                    <option value="alphabet">Sort alphabetically </option>
                    <option value="date">Sort by date </option>
                </select>
                {/* <button>🔍</button> */}
            </form>
        </section>
    }




}