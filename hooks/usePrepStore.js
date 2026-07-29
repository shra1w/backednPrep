"use client";

import { useCallback, useEffect, useState } from "react";
import { store } from "@/lib/store";
import { ALL_TOPIC_IDS } from "@/data/topics";

export function usePrepStore() {
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState({});
  const [snippets, setSnippets] = useState({});

  useEffect(() => {
    setProgress(store.loadProgress());
    setSnippets(store.loadSnippets());
    setReady(true);
  }, []);

  const toggleTopic = useCallback((topicId) => {
    if (!ALL_TOPIC_IDS.includes(topicId)) {
      throw new Error(`Unknown topic id: "${topicId}"`);
    }
    setProgress((prev) => {
      const next = { ...prev };
      if (next[topicId]) delete next[topicId];
      else next[topicId] = true;
      store.saveProgress(next);
      return next;
    });
  }, []);

  const saveSnippet = useCallback((topicId, code) => {
    if (!ALL_TOPIC_IDS.includes(topicId)) {
      throw new Error(`Unknown topic id: "${topicId}"`);
    }
    setSnippets((prev) => {
      const next = { ...prev };
      const trimmed = code.trim();
      if (trimmed === "") delete next[topicId];
      else next[topicId] = code;
      store.saveSnippets(next);
      return next;
    });
  }, []);

  const doneCount = Object.keys(progress).length;
  const totalCount = ALL_TOPIC_IDS.length;

  return { ready, progress, snippets, toggleTopic, saveSnippet, doneCount, totalCount };
}
