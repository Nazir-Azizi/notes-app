import { useNavigate } from "react-router-dom";
import './Header.css';
export function Header() {
  const navigate = useNavigate();
  
  return (
    <div className="header-container">
      <h1 className='header-text'>Notes</h1>
      <div className='add-note-btn-container'>
       <button className='add-note-btn' onClick={() => navigate('/notesFormPage/-1')}>Add note</button>
      </div>
    </div>
  );
}