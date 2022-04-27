
export function NoteImg({ note }) {
    return <section>

        <div className="note-card">

            <div>
                <img src={note.info.url} alt="" />
            </div>
            <h1>{note.info.txt}</h1>
        </div>
    </section>
}