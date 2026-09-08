import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { HomePage } from "./pages/HomePage";
import { NoteFormPage } from './pages/NoteFormPage'
import './App.css'

function App() {
  const [notes, setNotes] = useState([]);
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage notes={notes} setNotes={setNotes} />} />
          <Route path="/notespage" element={<NoteFormPage notes={notes} setNotes={setNotes} />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
