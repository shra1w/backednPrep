"use client";

import { useEffect, useState } from "react";
import { FaXmark, FaFloppyDisk, FaTrashCan, FaCode } from "react-icons/fa6";

export default function CodeModal({ topic, initialCode, onSave, onClose }) {
  const [code, setCode] = useState(initialCode);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        onSave(topic.id, code);
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [code, topic.id, onSave, onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="modal-head">
          <span className="modal-title">
            <FaCode className="neon" /> {topic.name}
          </span>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <FaXmark />
          </button>
        </div>
        <p className="modal-hint">
          Paste JS / TS code, notes, or interview answers here. Saved locally only. (Ctrl+S to save)
        </p>
        <textarea
          className="modal-editor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          placeholder={`// e.g. LRU cache, event-loop demo, SQL query…\n`}
          autoFocus
        />
        <div className="modal-actions">
          {initialCode !== "" && (
            <button
              className="btn btn--danger"
              onClick={() => { onSave(topic.id, ""); onClose(); }}
            >
              <FaTrashCan /> Delete
            </button>
          )}
          <button
            className="btn btn--primary"
            onClick={() => { onSave(topic.id, code); onClose(); }}
          >
            <FaFloppyDisk /> Save
          </button>
        </div>
      </div>
    </div>
  );
}
