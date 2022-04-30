

export class EmailFilter extends React.Component {


    render() {

        return <section className="filter-header-section">
            <form action="" className="email-filter-form">
                <div className="miss-email-filter-header">≡  MisterEmail   📬</div>
              
                <div>
                    <label htmlFor="">Search:</label>
                    <input onChange={this.props.handleChange} type="text" />
                </div>
                <select name="" id="" onChange={this.props.sortBy} className="filter-selection">
                    <option value="alphabet">Sort alphabetically </option>
                    <option value="date">Sort by date </option>
                </select>
                {/* <button>🔍</button> */}
                <div className="unread-div">Unread: {this.props.unread}</div>
            </form>
        </section>
    }




}