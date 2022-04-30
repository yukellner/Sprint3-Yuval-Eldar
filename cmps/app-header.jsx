const { Link, NavLink, withRouter } = ReactRouterDOM
// import { eventBusService } from '../services/event-bus-service.js'

class _AppHeader extends React.Component {
    // console.log('Props from header', props);

    state = {
        // carsCount: '',
    }
    // removeEvent;

    componentDidMount() {
        // this.removeEvent = eventBusService.on('cars-count', (carsCount) => {
        //     // console.log('str from header', str)
        //     this.setState({ carsCount })
        // })
    }

    componentWillUnmount() {
        // this.removeEvent()
    }

    render() {
        // const { carsCount } = this.state
        // Almost never use goBack -> it might send the user outside of the app.
        return <header className="app-header">
            {/* <h3 onClick={() => this.props.history.goBack()}>Cars R Us</h3> */}

            {/* {carsCount && <h3>Cars count: {carsCount}</h3>} */}
            <nav className="app-header-nav">
                <NavLink className="app-header-link" to="/emails" activeClassName="my-active">Emails</NavLink>
                <NavLink className="app-header-link" to="/keep" activeClassName="my-active">Keep</NavLink>
                <NavLink className="app-header-link" to="/books" activeClassName="my-active">Books</NavLink>
            </nav>
                <NavLink className="app-header-link-home" to="/" exact>Home</NavLink>
        </header>
    }
}

export const AppHeader = withRouter(_AppHeader)