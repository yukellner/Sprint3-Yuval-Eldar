
export function NoteImg({ note }) {
    return <section>

        <div className="note-card">

            <h1>image note</h1>
            <div>
                <img src={note.info.url} alt="" />
            </div>
            <h1>{note.info.txt}</h1>
            {/* {cars.map(car => <CarPreview car={car} key={car.id} />)} */}
        </div>
    </section>
}