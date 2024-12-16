import { articles } from "./data.js";
import { buildInvertedIndex } from "./invertedIndex.js";
import { search } from "./search.js";
import { initializeUI } from "./ui.js";
import { Trie } from "./trie.js";
import { SearchHistory } from "./searchHistory.js";

buildInvertedIndex(articles);

const trie = new Trie();
const searchHistory = new SearchHistory();
articles.forEach((article) => trie.insert(article.title.toLowerCase()));

// Make necessary objects globally available
window.trie = trie;
window.search = search;
window.searchHistory = searchHistory;

// Initialize UI after making objects global
initializeUI();
