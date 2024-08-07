import React, { useState } from 'react';
import './App.css';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

interface INote {
  id: number;
  title: string;
  content: string;
  category: string;
  tags: string[];
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<INote[]>([]);
  const [editNote, setEditNote] = useState<INote | null>(null);

  const addNote = (note: INote) => {
    setNotes([...notes, note]);
  };

  const updateNote = (updatedNote: INote) => {
    setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));
    setEditNote(null);
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <NoteForm
        onAddNote={addNote}
        onUpdateNote={updateNote}
        editNote={editNote}
      />
      <NoteList notes={notes} onEditNote={setEditNote} onDeleteNote={deleteNote} />
    </div>
  );
};

export default App;
