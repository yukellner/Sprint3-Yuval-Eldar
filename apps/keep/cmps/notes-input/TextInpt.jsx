

export function TextInpt({ handleChange }) {

    
    return <section>




        <input placeholder="title" name="title" className="title-inpt t-inpt" onChange={handleChange}></input>

        <textarea type="text" className=" t-inpt" name="txt" placeholder="add note content" onChange={handleChange} />
    </section>
}