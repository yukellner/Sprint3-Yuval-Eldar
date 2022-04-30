import {BookPriview} from './book-preview.jsx'
import { BookFilter } from '../cmps/book-filter.jsx'
import { bookService } from '../services/books.service.js'

export class BookList extends React.Component {

    state = { 

        books: [],
    }

    componentDidMount() {
            this.loadBooks()
    }


    loadBooks = () => {

        bookService.loadBooks(this.state.filteredBy)
            .then(books => this.setState({books}))
    }

    onSetFilter = (filteredBy) => {
        this.setState({ filteredBy }, () => {
            this.loadBooks()
        })
    }

    render() {
        
        

        return <section className="book-list">
        <BookFilter onSetFilter={this.onSetFilter}/>
       {this.state.books.map((book) => 
            <BookPriview className="book-preview" book={book} key={book.id} />
            )}
       
    </section>

    }
}