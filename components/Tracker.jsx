"use client";

import { useMemo, useState } from "react";
import { FaListCheck, FaBookBookmark } from "react-icons/fa6";
import { CATEGORIES } from "@/data/topics";
import { usePrepStore } from "@/hooks/usePrepStore";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import SearchBar from "./SearchBar";
import CategoryCard from "./CategoryCard";
import CodeModal from "./CodeModal";
import SnippetVault from "./SnippetVault";

export default function Tracker() {
  const { ready, progress, snippets, toggleTopic, saveSnippet, doneCount, totalCount } =
    usePrepStore();
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("topics"); // "topics" | "vault"
  const [modalTopic, setModalTopic] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q === "") return CATEGORIES;
    return CATEGORIES.map((c) => ({
      ...c,
      topics: c.topics.filter((t) => t.name.toLowerCase().includes(q)),
    })).filter((c) => c.topics.length > 0);
  }, [query]);

  if (!ready) return null; // avoids hydration flash; storage loads in one tick

  return (
    <main className="wrap">
      <Header />
      <ProgressBar done={doneCount} total={totalCount} />

      <div className="tabs" role="tablist">
        <button
          className={tab === "topics" ? "tab tab--active" : "tab"}
          role="tab"
          aria-selected={tab === "topics"}
          onClick={() => setTab("topics")}
        >
          <FaListCheck /> Topics
        </button>
        <button
          className={tab === "vault" ? "tab tab--active" : "tab"}
          role="tab"
          aria-selected={tab === "vault"}
          onClick={() => setTab("vault")}
        >
          <FaBookBookmark /> Code Vault
          {Object.keys(snippets).length > 0 && (
            <span className="tab-badge">{Object.keys(snippets).length}</span>
          )}
        </button>
      </div>

      {tab === "topics" ? (
        <>
          <SearchBar value={query} onChange={setQuery} />
          {filtered.length === 0 && <p className="vault-empty">No topics match “{query}”.</p>}
          <div className="grid">
            {filtered.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                progress={progress}
                snippets={snippets}
                onToggle={toggleTopic}
                onOpenCode={setModalTopic}
              />
            ))}
          </div>
        </>
      ) : (
        <SnippetVault snippets={snippets} onEdit={setModalTopic} />
      )}

      {modalTopic && (
        <CodeModal
          topic={modalTopic}
          initialCode={snippets[modalTopic.id] ?? ""}
          onSave={saveSnippet}
          onClose={() => setModalTopic(null)}
        />
      )}

      <footer className="footer">All progress & code stored in your browser (localStorage) — no database.</footer>
    </main>
  );
}
