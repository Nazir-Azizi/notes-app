import { useNavigate } from "react-router-dom";
import './NotePage.css';
import { useState } from "react";
export function NotePage({ notes, setNotes }) {
  const navigate = useNavigate();
  const [titleText, setTitleText] = useState('');
  const [noteText, setNoteText] = useState('');
  function saveTitleInputText(event) {
    setTitleText(event.target.value);
  }
  function saveNoteText(event) {
    setNoteText(event.target.value);
  }
  function saveNote() {
    if (titleText.trim().length != 0 || noteText.trim().length != 0) {
      const newNote = [...notes];
      newNote.push({
        id: crypto.randomUUID(),
        title: titleText,
        text: noteText,
        date: 'May 23, 2020'
      });
      setNotes(newNote);
      navigate('/');
    }
  }

  return (
    <div className="note-form-container">
      <div className='noteform-header'>
        <input onChange={saveTitleInputText} type="text" placeholder="Title..." className="title-input" />
        <div className='noteform-btns'>
          <button onClick={saveNote}>Save</button>
          <button onClick={() => navigate('/')}>Cancel</button>
        </div>
      </div>
      <textarea onChange={saveNoteText} placeholder="Start typing here..." className="note-textarea"/>
    </div>
  );
}