export function ToolsBar({ updateType }) {
    return <section className="type-container">
        

        <button onClick={updateType} name="note-txt">text</button>
        <button onClick={updateType} name="note-img">img</button>
        <button onClick={updateType} name="note-todos">todo</button>


       
    </section>
}