import { useState, useEffect } from "react";
import { root } from "./variable";

const Trie = () => {
  const root2 = root || {};

  const searchPrefix = (prefix) => {
    let node = root2;
    for (let i = 0; i < prefix.length; i++) {
      if (!node[prefix[i]]) return null;
      node = node[prefix[i]];
    }
    return node;
  };

  const collectWords = (node, prefix, results) => {
    if (node.isEndOfWord) results.push(prefix);
    for (let key in node) {
      if (key === "isEndOfWord") continue;
      collectWords(node[key], prefix + key, results);
    }
  };

  const getSuggestion = (prefix) => {
    const node = searchPrefix(prefix);
    if (!node) return [];
    const results = [];
    collectWords(node, prefix, results);
    return results;
  };
  return { getSuggestion };
};

const trie = Trie();

export const AutoCompleteSuggestion = () => {
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [cache, setCache] = useState({ "": [] });

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (cache[search]) {
        setSuggestion(cache[search]);
        return;
      }
      const data = await trie.getSuggestion(search);
      setSuggestion(data);
      setCache((cache) => ({ ...cache, search: data }));
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value?.trim())}
      />
      {suggestion.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};
