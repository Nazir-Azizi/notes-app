import './Header.css';
export function Header({ notes, setNotes }) {

  
  return (
    <div className="header-container">
      <h1 className='header-text'>Notes</h1>
      <div className='add-note-btn-container'>
       <button className='add-note-btn'>Add note</button>
      </div>
    </div>
  );
}