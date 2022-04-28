export function ToolsBar({updateType}) {
    return <section>

        <a onClick={updateType} name="note-txt">text</a>
        <a onClick={updateType} name="note-img">img</a>
        <a onClick={updateType} name="note-todos">todo</a>
    </section>
}