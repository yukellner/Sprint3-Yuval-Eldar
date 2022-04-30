const { Link, NavLink, withRouter } = ReactRouterDOM
// import { eventBusService } from '../services/event-bus-service.js'

class _AppHeader extends React.Component {

    state = {
        // carsCount: '',
    }
    // removeEvent;

   

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
                <NavLink className="app-header-link" to="/emails">Emails</NavLink>
                <NavLink className="app-header-link" to="/keep" activeClassName="my-active">Keep</NavLink>
                <NavLink className="app-header-link" to="/books" activeClassName="my-active">Books</NavLink>
            </nav>
                <NavLink className="app-header-link-home" to="/" exact>Home</NavLink>
        </header>
    }
}

export const AppHeader = withRouter(_AppHeader)