import React from "react";
import ReactMarkdown from "react-markdown";

function NoteView({ activeNote, onUpdateNote }) {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) return <div className="no-active-note">Your notes!</div>;

  return (
    <>
      <div className="app-main">
        <div className="app-main-note-edit">
          <input
            type="text"
            id="title"
            value={activeNote.title}
            onChange={(e) => onEditField("title", e.target.value)}
          />

          <textarea
            id="body"
            placeholder="Write your note here..."
            value={activeNote.body}
            onChange={(e) => onEditField("body", e.target.value)}
            autoFocus
          />
        </div>

        <div className="app-main-note-preview">
          <h1 className="preview-title">{activeNote.title}</h1>
          <ReactMarkdown className="markdown-preview">
            {activeNote.body}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default NoteView;