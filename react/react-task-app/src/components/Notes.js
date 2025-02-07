import React, { useState, useEffect } from "react";

const Notes = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [newNote, setNewNote] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addOrUpdateNote = () => {
    if (newNote.trim() === "") return;
    if (editingIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editingIndex] = newNote;
      setNotes(updatedNotes);
      setEditingIndex(null);
    } else {
      setNotes([...notes, newNote]);
    }
    setNewNote("");
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const editNote = (index) => {
    setNewNote(notes[index]);
    setEditingIndex(index);
  };

  return (
    <div className="container">
      <h1 className="page-title">📝 Notes 📝</h1>
      <h3 className="page-subtitle">Write, Edit, and Delete Your Notes</h3>
      
      <input
        type="text"
        placeholder="Write your note..."
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />

      {/* Add button with extra margin */}
      <button className="theme-button add-note-btn" onClick={addOrUpdateNote}>
        {editingIndex !== null ? "Update Note" : "Add Note"}
      </button>

      <ul className="note-list">
        {notes.map((note, index) => (
          <li key={index} className="note-item">
            <div className="note-actions">
              <button className="edit-btn" onClick={() => editNote(index)}>✏ Edit</button>
              <button className="delete-btn" onClick={() => deleteNote(index)}>🗑 Delete</button>
            </div>
            <span className="note-text">{note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
