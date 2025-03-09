import React, { useState, useMemo } from "react";

const createTrie = () => {
  const root = {};

  const insert = (word) => {
    let node = root;
    for (const char of word) {
      if (!node[char]) {
        node[char] = {};
      }
      node = node[char];
    }
    node.isEndOfWord = true;
  };

  const searchPrefix = (prefix) => {
    let node = root;
    for (const char of prefix) {
      if (!node[char]) return null;
      node = node[char];
    }
    return node;
  };

  const collectWords = (node, prefix, result) => {
    if (node.isEndOfWord) result.push(prefix);
    for (const char in node) {
      if (char !== "isEndOfWord") {
        collectWords(node[char], prefix + char, result);
      }
    }
  };

  const getSuggestions = (prefix) => {
    const node = searchPrefix(prefix);
    if (!node) return [];

    const suggestions = [];
    collectWords(node, prefix, suggestions);
    return suggestions;
  };

  return { insert, getSuggestions };
};
const trie = createTrie();

const TrieSearch = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setSuggestions(trie.getSuggestions(value));
  };

  const handleAddWord = () => {
    if (input.trim()) {
      trie.insert(input);
      setInput("");
      setSuggestions([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type to search..."
      />
      <button onClick={handleAddWord}>Add Word</button>
      <ul>
        {suggestions.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrieSearch;
