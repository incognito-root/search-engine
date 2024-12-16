import { NavigationStack } from "./navigationStack.js";

const navStack = new NavigationStack();

export function displayResults(results) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";
  if (results.length === 0) {
    resultsContainer.innerHTML = "<li>No results found</li>";
    return;
  }
  results.forEach((result) => {
    const li = document.createElement("li");
    li.textContent = result.title;
    li.addEventListener("click", () => displayArticle(result));
    resultsContainer.appendChild(li);
  });
}

export function displaySuggestions(suggestions) {
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

export function displayArticle(article) {
  navStack.push({
    type: "article",
    content: article,
  });

  const mainContainer = document.querySelector(".main");
  mainContainer.innerHTML = `
        <div class="article-page">
            <div class="article-header">
                <button class="back-button">← Back to Search</button>
                <h1>${article.title}</h1>
            </div>
            <div class="article-content">
                ${article.content
                  .split("\n")
                  .map((para) => `<p>${para}</p>`)
                  .join("")}
            </div>
        </div>
    `;

  document.querySelector(".back-button").addEventListener("click", () => {
    navStack.pop();
    mainContainer.innerHTML = `
            <div id="engine-name">Coogle</div>
            <div class="search-container">
                <input type="text" id="search-box" placeholder="Search for tech articles..." />
                <div id="autocomplete-suggestions"></div>
            </div>
            <div id="search-history"></div>
            <div class="results-container">
                <ul id="results"></ul>
            </div>
        `;
    attachEventListeners();
    window.displaySearchHistory();
  });
}

export function displaySearchHistory() {
  const historyContainer = document.getElementById("search-history");
  const searches = window.searchHistory.getSearches();

  historyContainer.innerHTML = "<h3>Recent Searches</h3>";
  if (searches.length === 0) {
    historyContainer.innerHTML += "<p>No recent searches</p>";
    return;
  }

  const ul = document.createElement("ul");
  searches.forEach((query) => {
    const li = document.createElement("li");
    li.textContent = query;
    li.addEventListener("click", () => {
      document.getElementById("search-box").value = query;
      const results = window.search(query);
      displayResults(results);
    });
    ul.appendChild(li);
  });
  historyContainer.appendChild(ul);
}

function attachEventListeners() {
  const searchBox = document.getElementById("search-box");

  searchBox.addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    if (query) {
      const suggestions = window.trie.search(query);
      displaySuggestions(suggestions);
    } else {
      displaySuggestions([]);
    }
  });

  searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const query = event.target.value.trim().toLowerCase();
      if (query) {
        window.searchHistory.addSearch(query);
        displaySearchHistory();
        const results = window.search(query);
        displayResults(results);
        displaySuggestions([]);
      } else {
        displayResults([]);
      }
    }
  });
}

export function initializeUI() {
  window.displaySearchHistory = displaySearchHistory;
  window.displaySuggestions = displaySuggestions;
  window.displayResults = displayResults;
  attachEventListeners();
}
