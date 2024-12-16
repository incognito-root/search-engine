import { articles } from "./data.js";
import { buildInvertedIndex } from "./invertedIndex.js";
import { search } from "./search.js";
import { displayResults } from "./ui.js";
import { Trie } from "./trie.js";
import { SearchHistory } from "./searchHistory.js";

buildInvertedIndex(articles);

const trie = new Trie();
const searchHistory = new SearchHistory();  // Add this line
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
      searchHistory.addSearch(query);  // Add this line
      displaySearchHistory();          // Add this line
      const results = search(query);
      displayResults(results);
      displaySuggestions([]);
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

// Add this new function
function displaySearchHistory() {
  const historyContainer = document.getElementById("search-history");
  const searches = searchHistory.getSearches();
  
  historyContainer.innerHTML = "<h3>Recent Searches</h3>";
  if (searches.length === 0) {
    historyContainer.innerHTML += "<p>No recent searches</p>";
    return;
  }

  const ul = document.createElement("ul");
  searches.forEach(query => {
    const li = document.createElement("li");
    li.textContent = query;
    li.addEventListener('click', () => {
      document.getElementById("search-box").value = query;
      const results = search(query);
      displayResults(results);
    });
    ul.appendChild(li);
  });
  historyContainer.appendChild(ul);
}