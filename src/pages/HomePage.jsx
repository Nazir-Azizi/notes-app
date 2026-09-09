import { Notes } from '../components/Notes'
import { Header } from '../components/Header';

export function HomePage({ notes, setNotes }) {
  return (
    <>
      <Header />
      <Notes notes={notes} />
    </>
  );
}