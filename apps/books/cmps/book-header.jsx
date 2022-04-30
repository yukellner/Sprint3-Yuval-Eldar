
const { NavLink} = ReactRouterDOM



export function BookHeader() {

    return <header className="header">
        <h1>BookApp</h1>
        <nav className="nav">
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/books" >Books</NavLink>
        </nav>
    </header>
}