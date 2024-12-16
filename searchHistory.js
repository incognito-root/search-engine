class Node {
  constructor(query) {
    this.query = query;
    this.next = null;
  }
}

export class SearchHistory {
  constructor(maxSize = 5) {
    // Default max size of 5 recent searches
    this.head = null;
    this.size = 0;
    this.maxSize = maxSize;
  }

  addSearch(query) {
    // Don't add empty queries or duplicates
    if (!query.trim() || this.exists(query)) {
      return;
    }

    const newNode = new Node(query);
    newNode.next = this.head;
    this.head = newNode;

    this.size++;

    // Remove oldest search if we exceed maxSize
    if (this.size > this.maxSize) {
      this.removeOldest();
    }
  }

  exists(query) {
    let current = this.head;
    while (current) {
      if (current.query === query) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  removeOldest() {
    if (this.size <= 1) {
      this.head = null;
    } else {
      let current = this.head;
      for (let i = 0; i < this.size - 2; i++) {
        current = current.next;
      }
      current.next = null;
    }
    this.size--;
  }

  getSearches() {
    const searches = [];
    let current = this.head;
    while (current) {
      searches.push(current.query);
      current = current.next;
    }
    return searches;
  }
}
