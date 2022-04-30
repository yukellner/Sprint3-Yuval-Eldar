
import { FullDesc } from './full-desc.jsx'
import { bookService } from '../services/books.service.js'
import { AddReview } from '../cmps/add-review.jsx'
import { BookReview } from '../cmps/book-review.jsx'
const { Link } = ReactRouterDOM

export class BookDetail extends React.Component {

    state = {
        book:null
    }

    componentDidMount() {
        this.loadBook() 
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
            this.loadBook()
        }
    }

    loadBook = () => {
        const {bookID} = this.props.match.params
        bookService.getById(bookID)
        .then(book => {
            if (!book) return this.props.history.push('/')
            this.setState({ book })
        })
    }

    returnToBooks = () => {this.props.history.push('/books')}

    submitReview = () => {

    }

    render() {

        const book = this.state.book
        if (!book) return <div>Loading..</div>

        let readingLn = ' light reading'
        if (book.pageCount < 100) readingLn = ' light reading'
        if (book.pageCount > 200) readingLn = ' decent reading'
        if (book.pageCount > 500) readingLn = ' long reading'

        const bookMarketTime = new Date().getFullYear() - book.publishedDate
        let marketTime
        if (bookMarketTime < 1) marketTime = ' New!'
        if (bookMarketTime > 10) marketTime = ' Veteren book'

        let priceClass = ''
        if (book.listPrice.amount < 20) priceClass = 'green'
        if (book.listPrice.amount > 150) priceClass = 'red'

        let currencySign
        switch (book.listPrice.currencyCode) {
            case 'EUR': {
                currencySign = '€'
                break
            }
            case 'USD': {
                currencySign = '$'
                break
            }
            case 'ILS': {
                currencySign = '₪'
            }
        }

        const saleSign = '/assets/img/sale.png'

        return <section className="book-preview">
            <p>Title: {book.title}</p>
            <p>Subtitle: {book.subtitle}</p>
            <p>Authors: {book.authors}</p>
            <p>Bublished at: {book.publishedDate} {marketTime}</p>
            <p>Pages: {book.pageCount} {readingLn}</p>
            <p>Catagoties: {book.categories}</p>
            <img className="thumb-container" src={book.thumbnail} alt="" />
            <p>Language: {book.language}</p>
            <FullDesc desc={book.description} isOpen={false} less={() => this.setState({ open: false })} />
            <p className={priceClass}>Price {' ' + book.listPrice.amount + ' ' + currencySign}</p>
            {book.listPrice.isOnSale && <img src={saleSign} alt="" />}
            {book.reviews && book.reviews.map((review, idx) => <BookReview key={idx} review={review}/>)}
            <h2>Add Review:</h2>
            <AddReview submitReview={this.submitReview} book={book}/>
            <br />
            <br />
            <button onClick={ this.returnToBooks}>return</button>



        </section>
    }
}
