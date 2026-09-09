import { useNavigate } from 'react-router-dom';
import './Note.css';
export function Note({ note, notes, setNotes }) {

  const navigate = useNavigate();

  function navToEdit() {
    navigate(`/notesFormPage/${note.id}`);
  }

  function deleteNote(event) {
    event.stopPropagation();
    
    const newNotes = [];
    notes.forEach(noteEle => {
      if (noteEle.id !== note.id)
        newNotes.push(noteEle);
    });
    setNotes(newNotes);

  }

  return (
    <div className="note-container" onClick={navToEdit}>
      <div className="note-text">{note.title.length == 0? note.text : note.title}</div>
      <div className="note-info">
        <div className="note-date">{note.date}</div>
        <button className="delete-btn" onClick={deleteNote}>Delete</button>
      </div>
    </div>
  );
}