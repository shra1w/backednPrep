"use client";

import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search">
      <FaMagnifyingGlass className="search-icon" />
      <input
        className="search-input"
        type="text"
        placeholder="Search topics…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search topics"
      />
      {value !== "" && (
        <button className="search-clear" onClick={() => onChange("")} aria-label="Clear search">
          <FaXmark />
        </button>
      )}
    </div>
  );
}
