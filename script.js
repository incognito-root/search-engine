import { articles } from "./data.js";
import { buildInvertedIndex } from "./invertedIndex.js";
import { search } from "./search.js";
import { displayResults } from "./ui.js";

// Build the inverted index
buildInvertedIndex(articles);

// Event Listener for Search
document.getElementById("search-box").addEventListener("input", () => {
  const query = document.getElementById("search-box").value.trim();
  if (query) {
    const results = search(query);
    displayResults(results);
  } else {
    displayResults([]);
  }
});
