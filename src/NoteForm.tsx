import React, { useState, useEffect } from 'react';

interface Note {
  id: number;
  title: string;
  content: string;
  category: string;
  tags: string[];
}

interface NoteFormProps {
  onAddNote: (note: Note) => void;
  onUpdateNote: (note: Note) => void;
  editNote: Note | null;
}

const NoteForm: React.FC<NoteFormProps> = ({ onAddNote, onUpdateNote, editNote }) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [tags, setTags] = useState<string>('');

  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title);
      setContent(editNote.content);
      setCategory(editNote.category);
      setTags(editNote.tags.join(', '));
    }
  }, [editNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newNote: Note = {
      id: editNote ? editNote.id : Date.now(),
      title,
      content,
      category,
      tags: tags.split(',').map(tag => tag.trim()),
    };

    if (editNote) {
      onUpdateNote(newNote);
    } else {
      onAddNote(newNote);
    }

    setTitle('');
    setContent('');
    setCategory('');
    setTags('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <input
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Tags (comma separated)"
      />
      <button type="submit">{editNote ? 'Update Note' : 'Add Note'}</button>
    </form>
  );
};

export default NoteForm;
