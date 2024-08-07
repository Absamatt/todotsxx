import React from 'react';

interface INote {
  id: number;
  title: string;
  content: string;
  category: string;
  tags: string[];
}

interface NoteProps {
  note: INote;
  onEdit: () => void;
  onDelete: () => void;
}

const Note: React.FC<NoteProps> = ({ note, onEdit, onDelete }) => {
  return (
    <div className="note">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p><strong>Category:</strong> {note.category}</p>
      <p><strong>Tags:</strong> {note.tags.join(', ')}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Note;
