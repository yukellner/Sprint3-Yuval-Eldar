import { bookService } from '../services/books.service.js'


export class AddReview extends React.Component {

    state = {
        
        book: this.props.book,
        review: {

            readerName:'',
            rating:null,
            date: null,
            review:''

        }
    }




    inputRef = React.createRef()

    componentDidMount() {
        
        this.inputRef.current.focus()
    }

    submitReview = (ev) => {
        ev.preventDefault()
        bookService.addReview(this.state.book.id, this.state.review)
        

    }

    submitToState = ({ target }) => {
        const value = (target.type === 'number') ? +target.value : target.value
        const field = target.name
        this.setState((prevState) => ({ review: { ...prevState.review, [field]: value }}))

    }


    render() {

        
        
        return <form className="add-review" onChange={this.submitToState}
        onSubmit={this.submitReview}>

            <label htmlFor="">Reader Name: </label>
            <input type="text" id="readerName" name="readerName" maxLength="10" size="10" ref={this.inputRef}/>
            <label htmlFor="">Book Rating: </label>
            <select type="Number" name="rating" id="rating">
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
            </select>
            <label htmlFor="">Date read:</label>
            <input type="date" id="date" name="date"/>
            <label htmlFor="">Review:</label>
            <input type="text" id="review" name="review" size="50"/>
            <button>Submit</button>

    </form>
    }
}