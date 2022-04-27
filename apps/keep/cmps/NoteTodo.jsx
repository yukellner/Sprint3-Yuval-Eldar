
export function NoteTodo({ note }) {
    return <section>
        <div className="note-card">


            <h2>{note.info.label}</h2>
            {/* <a className="delete-note" onClick={this.onDeleteNote()}>X</a> */}

        </div>
    </section>
}