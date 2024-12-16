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

export function displayArticle(article) {
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
    window.location.reload();
  });
}
