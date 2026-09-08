import './NoteForm.css';
export function NoteForm() {
  return (
    <div className="note-form-container">
      <input type="text" placeholder="Title..." className="title-input" />
      <textarea placeholder="Start typing here..." className="note-textarea"/>
    </div>
  );
}