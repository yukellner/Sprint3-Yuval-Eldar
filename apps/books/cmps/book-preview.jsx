import { bookService } from '../services/books.service.js'
import {BookDetail} from './book-detail.jsx'
const { Link } = ReactRouterDOM


export function BookPriview({book, onSelectedBook}) {




    let currencySign
    switch(book.listPrice.currencyCode) {
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

  

    return <Link to={`/books/${book.id}`}  className="book-preview" >
            <p>Title: {book.title} </p>
            <img className="thumb-container" src={book.thumbnail} alt="" />
            <p>{book.listPrice.amount + ' ' + currencySign}</p>
            
        
    </Link >
}




// "id": "OXeMG8wNskc",
//       "title": "metus hendrerit",
//       "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
//       "authors": [
//         "Barbara Cartland"
//       ],
//       "publishedDate": 1999,
//       "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
//       "pageCount": 713,
//       "categories": [
//         "Computers",
//         "Hack"
//       ],
//       "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
//       "language": "en",
//       "listPrice": {
//         "amount": 109,
//         "currencyCode": "EUR",
//         "isOnSale": false
//       }