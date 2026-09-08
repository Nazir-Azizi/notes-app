import { Notes } from '../components/Notes'
import { Header } from '../components/Header';

export function HomePage({ notes, setNotes }) {
  return (
    <>
      <Header notes={notes} setNotes={setNotes} />
      <Notes notes={notes} setNotes={setNotes} />
    </>
  );
}