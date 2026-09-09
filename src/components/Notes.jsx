import { Note } from "./Note";
import './Notes.css';
export function Notes({ notes, setNotes }) {
  return (
    <div className="notes-container">       
      { notes.map(note => <Note key={note.id} note={note} notes={notes} setNotes={setNotes} />) }
    </div>
  );
}