


export function BookReview(props) {

    return <section className="book-review">
            <p>name: {props.review.readerName}</p>
            <p>Rating: {props.review.rating}</p>
            <p>Date read: {props.review.Date}</p>
            <p>review: {props.review.review}</p>
    </section>


    






}