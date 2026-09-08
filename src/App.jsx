import { Notes } from './components/Notes'
import { Header } from './components/Header';
import './App.css'
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([{
    id: 1,
    title: 'First Note',
    text: 'This is my first note',
    date: 'May 21, 2026'
  },
  {
    id: 2,
    title: 'Second Note',
    text: 'This is my second note',
    date: 'May 21, 2020'
  }
  ]);
  return (
    <div className='app-container'>
      <Header notes={notes} setNotes={setNotes} />
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  )
}

export default App
