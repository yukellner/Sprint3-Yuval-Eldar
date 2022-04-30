import { bookService } from '../services/books.service.js'
import { BookList} from '../cmps/book-list.jsx'
import { BookDetail } from '../cmps/book-detail.jsx'

import { BookHeader} from '../cmps/book-header.jsx'
import { Home} from '../pages/home.jsx'
import { About} from '../pages/about.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export class BookApp extends React.Component {

    state = { 

        books: [],
        filteredBy: null,
        selectedBook: null
    }

    componentDidMount() {
            this.loadBooks()
    }


    loadBooks = () => {
        bookService.loadBooks(this.state.filteredBy)
            .then(books => this.setState({books}))
    }

    onSelectedBook = (book) => {
        console.log('selecting book');
        this.setState({selectedBook: book})
    }
    onUnSelectedBook = (book) => {
        this.setState({selectedBook: null})
    }


    onSetFilter = (filteredBy) => {
        this.setState({ filteredBy }, () => {
            this.loadBooks()
        })
    }

    render() {


        
        
        return<Router>
            <BookHeader/>
            <section>
                    <Switch>

                <Route path="/books/:bookID" component={BookDetail}/>
                <Route path="/books" exact component={BookList} />
                <Route path="/about" component={About} />
                <Route path="/" exact component={Home} />
                    </Switch>
            </section>
        </Router>
    }
    
}
{/* <BookFilter onSetFilter={this.onSetFilter} />
{!this.state.selectedBook && <BookList className="book-list" books={this.state.books} onSelectedBook={this.onSelectedBook} />}
{this.state.selectedBook && <BookDetail book={this.state.selectedBook}  onUnSelectedBook={this.onUnSelectedBook}/>} */}