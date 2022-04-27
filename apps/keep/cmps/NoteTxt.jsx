
export function NoteTxt({ note }) {
    return <section>

        <div className="note-card">

            <h1>txt note</h1>
            <h1>{note.info.txt}</h1>
            {/* {cars.map(car => <CarPreview car={car} key={car.id} />)} */}
        </div>
    </section>
}