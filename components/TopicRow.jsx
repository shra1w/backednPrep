"use client";

import { FaCheck, FaCode } from "react-icons/fa6";

export default function TopicRow({ topic, checked, hasSnippet, onToggle, onOpenCode }) {
  return (
    <li className={checked ? "topic topic--done" : "topic"}>
      <button
        className="topic-check"
        role="checkbox"
        aria-checked={checked}
        aria-label={`Mark "${topic.name}" as ${checked ? "not done" : "done"}`}
        onClick={() => onToggle(topic.id)}
      >
        <span className="topic-box">{checked && <FaCheck />}</span>
        <span className="topic-name">{topic.name}</span>
      </button>
      <button
        className={hasSnippet ? "topic-code topic-code--filled" : "topic-code"}
        onClick={() => onOpenCode(topic)}
        aria-label={`${hasSnippet ? "Edit" : "Add"} code snippet for ${topic.name}`}
        title={hasSnippet ? "View / edit saved code" : "Add code for revision"}
      >
        <FaCode />
      </button>
    </li>
  );
}
