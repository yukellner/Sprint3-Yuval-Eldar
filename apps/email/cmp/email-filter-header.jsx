

export class EmailFilter extends React.Component {

    state = {
        sraechVal: {
            title:'',
            isStar: null,
            isRead: null,
            lables: []
        }
    }

    handleChange = ({target}) => {
        const value = target.value
        this.setState((prevState) => ({ sraechVal: { ...prevState.sraechVal, title: value } }), this.props.onSet)
        
    }

    render() {

        return <section className="email-filter">
            <form action="">
                <label htmlFor="">Search:</label>
                <input onChange={this.handleChange} type="text" />
                <button>🔍</button>
            </form>
        </section>
    }




}