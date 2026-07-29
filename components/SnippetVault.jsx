"use client";

import { useMemo, useState } from "react";
import { FaBookBookmark, FaPen, FaCopy, FaCheck } from "react-icons/fa6";
import { CATEGORIES } from "@/data/topics";

const TOPIC_LOOKUP = new Map(
  CATEGORIES.flatMap((c) => c.topics.map((t) => [t.id, { ...t, category: c.title }]))
);

function SnippetCard({ topicId, code, onEdit }) {
  const [copied, setCopied] = useState(false);
  const topic = TOPIC_LOOKUP.get(topicId);
  if (!topic) throw new Error(`SnippetVault: snippet saved for unknown topic "${topicId}"`);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <article className="snippet">
      <div className="snippet-head">
        <div>
          <span className="snippet-cat">{topic.category}</span>
          <h3 className="snippet-title">{topic.name}</h3>
        </div>
        <div className="snippet-btns">
          <button className="btn btn--ghost" onClick={copy} aria-label="Copy code">
            {copied ? <FaCheck className="neon" /> : <FaCopy />}
          </button>
          <button className="btn btn--ghost" onClick={() => onEdit(topic)} aria-label="Edit code">
            <FaPen />
          </button>
        </div>
      </div>
      <pre className="snippet-code"><code>{code}</code></pre>
    </article>
  );
}

export default function SnippetVault({ snippets, onEdit }) {
  const entries = useMemo(() => Object.entries(snippets), [snippets]);

  return (
    <section className="vault">
      <h2 className="vault-title">
        <FaBookBookmark className="neon" /> Code Vault
        <span className="vault-count">{entries.length}</span>
      </h2>
      {entries.length === 0 ? (
        <p className="vault-empty">
          No snippets yet. Hit the <FaPen style={{ verticalAlign: "-2px" }} /> code button on any
          topic to save code for future revision.
        </p>
      ) : (
        <div className="vault-grid">
          {entries.map(([topicId, code]) => (
            <SnippetCard key={topicId} topicId={topicId} code={code} onEdit={onEdit} />
          ))}
        </div>
      )}
    </section>
  );
}
