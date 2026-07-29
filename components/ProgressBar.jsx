"use client";

import { FaBolt } from "react-icons/fa6";

export default function ProgressBar({ done, total, label = null, compact = false }) {
  if (total <= 0) throw new Error("ProgressBar: total must be > 0");
  const pct = Math.round((done / total) * 100);

  return (
    <div className={compact ? "progress progress--compact" : "progress"}>
      <div className="progress-meta">
        <span className="progress-label">
          {!compact && <FaBolt className="neon" />}
          {label ?? `${done} / ${total} topics done`}
        </span>
        <span className="progress-pct neon">{pct}%</span>
      </div>
      <div className="progress-track" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
