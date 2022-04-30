
import { Emails } from './apps/email/pages/emails.jsx'
import { NoteIndex } from './apps/keep/pages/note-index.jsx'
import { AppHome } from './pages/app-home.jsx'
import { AppHeader } from './cmps/app-header.jsx'
import { BookList} from './apps/books/cmps/book-list.jsx'
import { BookDetail } from './apps/books/cmps/book-detail.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
    
    return <section>


    
    <Router>
       <AppHeader /> 
        <section className="app">
            <Switch>
                <Route path="/books/:bookID" component={BookDetail}/>
                <Route path="/books" component={BookList} />
                <Route path="/emails" component={Emails} />
                <Route path="/keep" component={NoteIndex} />
                <Route path="/" className="app-home" component={AppHome} />
            </Switch>
        </section>
        {/* <AppFooter /> */}
        {/* <UserMsg /> */}
    </Router>
    </section>
        
}
