

export function TextInpt({ handleChange }) {
    return <section>



        {console.log('im in text input')}

        <textarea type="text" className="notes-filter" name="title" placeholder="add a note" onChange={handleChange} />
    </section>
}