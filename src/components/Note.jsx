import { useNavigate } from 'react-router-dom';
import './Note.css';
export function Note({ note }) {

  const navigate = useNavigate();

  function navToEdit() {
    navigate(`/notesFormPage/${note.id}`);
  }

  return (
    <div className="note-container" onClick={navToEdit}>
      <div className="note-text">{note.title.length == 0? note.text : note.title}</div>
      <div className="note-info">
        <div className="note-date">{note.date}</div>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  );
}