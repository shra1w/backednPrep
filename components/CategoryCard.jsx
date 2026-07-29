"use client";

import { useState } from "react";
import {
  FaNodeJs, FaPlug, FaDatabase, FaBoltLightning, FaDiagramProject,
  FaEnvelopesBulk, FaShieldHalved, FaCloud, FaNetworkWired,
  FaVialCircleCheck, FaCubes, FaChartLine, FaChevronDown,
} from "react-icons/fa6";
import TopicRow from "./TopicRow";
import ProgressBar from "./ProgressBar";

const ICONS = {
  node: FaNodeJs,
  api: FaPlug,
  db: FaDatabase,
  cache: FaBoltLightning,
  system: FaDiagramProject,
  queue: FaEnvelopesBulk,
  security: FaShieldHalved,
  cloud: FaCloud,
  network: FaNetworkWired,
  testing: FaVialCircleCheck,
  patterns: FaCubes,
  dsa: FaChartLine,
};

export default function CategoryCard({ category, progress, snippets, onToggle, onOpenCode }) {
  const [open, setOpen] = useState(true);

  const Icon = ICONS[category.icon];
  if (!Icon) throw new Error(`CategoryCard: no icon registered for "${category.icon}"`);

  const done = category.topics.filter((t) => progress[t.id]).length;
  const total = category.topics.length;

  return (
    <section className="card">
      <button className="card-head" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span className="card-icon"><Icon /></span>
        <span className="card-title">{category.title}</span>
        <span className="card-count">{done}/{total}</span>
        <FaChevronDown className={open ? "card-chevron card-chevron--open" : "card-chevron"} />
      </button>
      <ProgressBar done={done} total={total} label={`${category.title}`} compact />
      {open && (
        <ul className="card-list">
          {category.topics.map((topic) => (
            <TopicRow
              key={topic.id}
              topic={topic}
              checked={Boolean(progress[topic.id])}
              hasSnippet={Boolean(snippets[topic.id])}
              onToggle={onToggle}
              onOpenCode={onOpenCode}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
