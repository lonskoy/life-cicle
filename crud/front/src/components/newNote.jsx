export const NewNote = ({textArea, setTextArea, onSubmit}) => {
    return (
        <form name="newNote" id="newNote" onSubmit={onSubmit} >
            <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)}></textarea>
            <input type="submit" value="Отправить" />
        </form>
    )
} 