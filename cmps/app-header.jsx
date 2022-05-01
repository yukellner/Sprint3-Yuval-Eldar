const { Link, NavLink, withRouter } = ReactRouterDOM

class _AppHeader extends React.Component {
 

    componentWillUnmount() {

    }

    render() {

        return <header className="app-header">
        
            <nav className="app-header-nav">
                <NavLink className="app-header-link" to="/emails" activeClassName="my-active">Emails</NavLink>
                <NavLink className="app-header-link" to="/keep" activeClassName="my-active">Keep</NavLink>
                <NavLink className="app-header-link" to="/books" activeClassName="my-active">Books</NavLink>
            </nav>
            <div className="app-header-link-nav-container" >
                <div className="app-header-link-nav">
                <NavLink  to="/" exact>Home</NavLink>
                <NavLink  to="/about" exact>About</NavLink>
                {/* <div>
                    <img className="navbar-img" src="https://cdn-icons-png.flaticon.com/512/189/189791.png" alt="" />
                    <div className="nav-hidden-menue"></div>
                </div> */}
                </div>
            </div>
        </header>
    }
}

export const AppHeader = withRouter(_AppHeader)