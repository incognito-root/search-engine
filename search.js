import { invertedIndex } from "./invertedIndex.js";
import { documents } from "./data.js";

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

  // Sort results by relevance
  return Object.entries(results)
    .sort((a, b) => b[1] - a[1])
    .map(([docID]) => {
      return documents.find((doc) => doc.docID === parseInt(docID));
    });
}
