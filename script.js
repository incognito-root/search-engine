import { articles } from "./data.js";
import { buildInvertedIndex } from "./invertedIndex.js";
import { search } from "./search.js";
import { displayResults } from "./ui.js";
import { Trie } from "./trie.js";

buildInvertedIndex(articles);

const trie = new Trie();
articles.forEach((article) => trie.insert(article.title.toLowerCase()));

document.getElementById("search-box").addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();
  if (query) {
    const suggestions = trie.search(query);
    displaySuggestions(suggestions);
  } else {
    displaySuggestions([]);
  }
});

document.getElementById("search-box").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const query = event.target.value.trim().toLowerCase();
    if (query) {
      const results = search(query);
      displayResults(results);
    } else {
      displayResults([]);
    }
  }
});

function displaySuggestions(suggestions) {
  const suggestionsContainer = document.getElementById(
    "autocomplete-suggestions"
  );
  suggestionsContainer.innerHTML = "";
  suggestions.forEach((suggestion) => {
    const div = document.createElement("div");
    div.textContent = suggestion;
    div.className = "suggestion-item";
    div.addEventListener("click", () => {
      document.getElementById("search-box").value = suggestion;
      displaySuggestions([]);
    });
    suggestionsContainer.appendChild(div);
  });
  suggestionsContainer.style.display = suggestions.length ? "block" : "none";
}
