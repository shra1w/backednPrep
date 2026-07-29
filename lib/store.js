
const KEYS = {
  progress: "bp:progress:v1", 
  snippets: "bp:snippets:v1", // { [topicId]: string }
};

function read(key) {
  if (typeof window === "undefined") {
    throw new Error(`store.read("${key}") called on the server — client only`);
  }
  const raw = window.localStorage.getItem(key);
  if (raw === null) return {};
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    // Corrupted storage: surface loudly instead of silently wiping progress.
    throw new Error(`Corrupted localStorage at "${key}": ${e.message}`);
  }
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    throw new Error(`Invalid shape in localStorage at "${key}" — expected object`);
  }
  return parsed;
}

function write(key, value) {
  if (typeof window === "undefined") {
    throw new Error(`store.write("${key}") called on the server — client only`);
  }
  window.localStorage.setItem(key, JSON.stringify(value));
}

export const store = {
  loadProgress: () => read(KEYS.progress),
  saveProgress: (progress) => write(KEYS.progress, progress),
  loadSnippets: () => read(KEYS.snippets),
  saveSnippets: (snippets) => write(KEYS.snippets, snippets),
};
