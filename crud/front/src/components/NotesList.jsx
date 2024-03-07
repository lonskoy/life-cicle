
export const NotesList = (props) => {
    console.log(props);
    return (
        <div className="notesBox">
            {props.notes.map(el => {
                return (
                <>
                {/* <div className="note" key={el._id}>{el.text}</div> */}
                <textarea className="note" key={el._id} value={el.text} rows={10} cols={40} />
                <div className="deleteBtn" onClick={() => props.onDelete(el._id)}>X</div>
                </>)
            })}
        </div>
    )
}