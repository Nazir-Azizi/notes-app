import './Note.css';
export function Note({ note }) {
  return (
    <div className="note-container">
      <div className="note-text">{note.title}</div>
      <div className="note-info">
        <div className="note-date">{note.date}</div>
        <div className='note-btns'>
          <button className="btn edit-btn">Edit</button>
          <button className="btn delete-btn">Delete</button>
        </div>
      </div>
    </div>
  );
}