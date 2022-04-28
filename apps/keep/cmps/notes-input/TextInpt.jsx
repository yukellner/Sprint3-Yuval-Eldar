

export function TextInpt({ handleChange }) {
    return <section>

        <h1>add text</h1>

        <textarea type="text" className="notes-filter" name="title" placeholder="add a note" onChange={handleChange} />
    </section>
}