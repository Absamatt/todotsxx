import React from 'react';
import Note from './Note';

interface INote {
  id: number;
  title: string;
  content: string;
  category: string;
  tags: string[];
}

interface NoteListProps {
  notes: INote[];
  onEditNote: (note: INote) => void;
  onDeleteNote: (id: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onEditNote, onDeleteNote }) => {
  return (
    <div>
      {notes.map(note => (
        <Note
          key={note.id}
          note={note}
          onEdit={() => onEditNote(note)}
          onDelete={() => onDeleteNote(note.id)}
        />
      ))}
    </div>
  );
};

export default NoteList;
