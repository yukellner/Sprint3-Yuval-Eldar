export function ToolsBar({ updateType }) {
    return <section className="type-container">
        {/* <i  className="fa-regular fa-file-lines" name="note-txt" onClick={alert('clicked')}></i>
        <i className="fa-solid fa-xmark delete-note" onClick={alert('clicked')}></i> */}


        <button onClick={updateType} name="note-txt">text</button>
        <button onClick={updateType} name="note-img">img</button>
        <button onClick={updateType} name="note-todos">todo</button>


        {/* <a onClick={updateType} name="note-txt " className="btn-type">x<i onClick={updateType} className="fa-regular fa-file-lines"></i></a>
        <a onClick={updateType} name="note-img " className="btn-type">x<i onClick={updateType} className="fa-regular fa-image"></i></a>
        <a onClick={updateType} name="note-todos " className="btn-type">x<i onClick={updateType} className="fa-solid fa-list-check"></i></a>
          */}

    </section>
}