import { invertedIndex } from "./invertedIndex.js";
import { articles } from "./data.js";

export function search(query) {
  const words = query.toLowerCase().split(/\W+/);
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
