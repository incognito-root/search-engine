import { articles } from "./data.js";
import { buildInvertedIndex } from "./invertedIndex.js";
import { search } from "./search.js";
import { initializeUI } from "./ui.js";
import { Trie } from "./trie.js";
import { SearchHistory } from "./searchHistory.js";
import { ArticleBST } from "./articleBST.js";

buildInvertedIndex(articles);

const articleBST = new ArticleBST();
const trie = new Trie();
const searchHistory = new SearchHistory();
articles.forEach((article) => trie.insert(article.title.toLowerCase()));
articles.forEach((article) => articleBST.insert(article));

document.getElementById("show-by-date").addEventListener("click", () => {
  const dateRange = document.getElementById("date-range");
  dateRange.style.display =
    dateRange.style.display === "none" ? "block" : "none";
});

document.getElementById("filter-by-date").addEventListener("click", () => {
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;

  if (startDate && endDate) {
    const filteredArticles = articleBST.getArticlesBetweenDates(
      startDate,
      endDate
    );
    displayResults(filteredArticles);
  } else {
    const allArticles = articleBST.getArticlesInOrder();
    displayResults(allArticles);
  }
});

// Make necessary objects globally available
window.trie = trie;
window.search = search;
window.searchHistory = searchHistory;
window.articleBST = articleBST;

// Initialize UI after making objects global
initializeUI();
