 


export class FullDesc extends React.Component {

    state = {
        desc: this.props.desc,
        isOpen: this.props.isOpen,
        less: this.props.less
    }

    showToggle = () => {
        this.setState({isOpen: !this.state.isOpen})}


   
    render() {
        return <section >
            <p></p>
            {!this.state.isOpen && <p>Description: {this.state.desc.substring(0,10)}</p>}
            {this.state.isOpen && <p>Description: {this.state.desc}</p>}
            <button onClick={this.showToggle}>{(!this.state.isOpen)? 'show more' : 'show less'}</button>
        </section>
    }


}