import { invertedIndex } from "./invertedIndex.js";
import { articles } from "./data.js";

export function search(query) {
  query = query.toLowerCase();

  // First, look for exact matches in titles
  const titleMatches = articles.filter((article) =>
    article.title.toLowerCase().includes(query)
  );

  // If we find title matches, return them first
  if (titleMatches.length > 0) {
    return titleMatches;
  }

  // If no title matches, search in content using inverted index
  const words = query.split(/\W+/);
  const results = {};

  words.forEach((word) => {
    if (invertedIndex[word]) {
      for (const docID in invertedIndex[word]) {
        if (!results[docID]) {
          results[docID] = 0;
        }
        results[docID] += invertedIndex[word][docID];
      }
    }
  });

  return Object.entries(results)
    .sort((a, b) => b[1] - a[1])
    .map(([docID]) => {
      return articles.find((doc) => doc.docID === parseInt(docID));
    });
}
