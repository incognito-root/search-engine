export const invertedIndex = {};

export function buildInvertedIndex(docs) {
  docs.forEach((doc) => {
    const words = doc.content.toLowerCase().split(/\W+/);
    words.forEach((word) => {
      if (!invertedIndex[word]) {
        invertedIndex[word] = {};
      }
      if (!invertedIndex[word][doc.docID]) {
        invertedIndex[word][doc.docID] = 0;
      }
      invertedIndex[word][doc.docID]++;
    });
  });
}
