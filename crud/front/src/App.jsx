import { NewNote } from './components/newNote'
import { NotesList } from './components/NotesList'
import './App.css'
import { useEffect, useState } from 'react'
import { create, noteList, noteDelete } from './api'

function App() {
const [notes, setNote] = useState([]);
const [textArea, setTextArea] = useState('');

useEffect(() => {
  const fetchNotes = async () => {
    const data = await noteList();
    setNote(data);
  };
  fetchNotes();
}, []);

const onSubmit = async (e) => {
  e.preventDefault();
  const data = await create(textArea);
  setNote((pathState) => [...pathState, data]);
  setTextArea('');
}

const onDelete = async (id) => {
    await noteDelete(id);
    setNote((pathState) => pathState.filter(el => el._id !== id));
}

  return (
    <>
        <NewNote textArea={textArea} setTextArea={setTextArea} onSubmit={onSubmit} />
        <NotesList notes={notes} onDelete={onDelete} />
    </>
  )
}

export default App
