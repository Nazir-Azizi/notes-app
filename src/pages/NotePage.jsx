import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import './NotePage.css';
import { useState } from "react";
export function NotePage({ notes, setNotes }) {
  const [titleText, setTitleText] = useState('');
  const [noteText, setNoteText] = useState('');

  const navigate = useNavigate();
  
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
        title: titleText.trim(),
        text: noteText.trim(),
        date: dayjs().format('MMMM DD, YYYY')
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