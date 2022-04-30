


export class BookFilter extends React.Component {


    state = {
        filterBy: { 
            bookName: '',
            minPrice:  0,
            maxPrice: 400
        }
    }


    updateFilter = ({ target }) => {
        console.log('filtering');
        const value = (target.type === 'number') ? +target.value : target.value
        const field = target.name
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }


    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render()  {

        const {bookName, minPrice, maxPrice} = this.state.filterBy
        return <section className="book-filter">
                    <form onSubmit={this.onFilter}>
                    <label > Book Name  </label>
                <input type="text" id="by-name" placeholder="search book" name="bookName"
                     onChange={this.updateFilter} />

                <label > Min Price  </label>
                <input type="number" id="by-minPrice" placeholder="by min price" name="minPrice"
                     onChange={this.updateFilter} />

                <label >  Max Price  </label>
                <input type="number" id="by-maxPrice" placeholder="by max price" name="maxPrice"
                     onChange={this.updateFilter} />

                <button className="button-filter">FILTER!</button>


                    </form>



        </section>
    }


}