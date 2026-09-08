import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { HomePage } from "./pages/HomePage";
import { NotePage } from './pages/NotePage'
import './App.css'

function App() {
  const [notes, setNotes] = useState([]);
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage notes={notes} setNotes={setNotes} />} />
          <Route path="/notespage" element={<NotePage notes={notes} setNotes={setNotes} />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
