class Node {
  constructor(article) {
    this.article = article;
    this.left = null;
    this.right = null;
  }
}

export class ArticleBST {
  constructor() {
    this.root = null;
  }

  insert(article) {
    const date = new Date(article.publishDate);
    const newNode = new Node(article);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    this._insertNode(this.root, newNode, date);
  }

  _insertNode(node, newNode, date) {
    const nodeDate = new Date(node.article.publishDate);

    if (date < nodeDate) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode, date);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode, date);
      }
    }
  }

  // Get articles in ascending order (oldest to newest)
  getArticlesInOrder() {
    const articles = [];
    this._inorderTraversal(this.root, articles);
    return articles;
  }

  _inorderTraversal(node, articles) {
    if (node !== null) {
      this._inorderTraversal(node.left, articles);
      articles.push(node.article);
      this._inorderTraversal(node.right, articles);
    }
  }

  // Get articles between two dates
  getArticlesBetweenDates(startDate, endDate) {
    const articles = [];
    this._searchDateRange(
      this.root,
      new Date(startDate),
      new Date(endDate),
      articles
    );
    return articles;
  }

  _searchDateRange(node, startDate, endDate, articles) {
    if (node === null) return;

    const nodeDate = new Date(node.article.publishDate);

    if (nodeDate > startDate) {
      this._searchDateRange(node.left, startDate, endDate, articles);
    }

    if (nodeDate >= startDate && nodeDate <= endDate) {
      articles.push(node.article);
    }

    if (nodeDate < endDate) {
      this._searchDateRange(node.right, startDate, endDate, articles);
    }
  }
}
