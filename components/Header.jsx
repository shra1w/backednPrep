"use client";

import { FaServer } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="header">
      <div className="header-brand">
        <span className="header-logo">
          <FaServer />
        </span>
        <div>
          <h1 className="header-title">
            Backend<span className="neon">Prep</span>
          </h1>
          <p className="header-sub">Senior Backend Engineer · 40–50 LPA Roadmap</p>
        </div>
      </div>
    </header>
  );
}
