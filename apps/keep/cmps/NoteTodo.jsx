
export function NoteTodo({ note }) {
    return <section>
        <div className="note-card">


            <h1>Todo note</h1>
            <h2>{note.info.label}</h2>

            {/* {cars.map(car => <CarPreview car={car} key={car.id} />)} */}
        </div>
    </section>
}