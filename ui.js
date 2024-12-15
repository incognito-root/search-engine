export function displayResults(results) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";
  if (results.length === 0) {
    resultsContainer.innerHTML = "<li>No results found</li>";
    return;
  }
  results.forEach((result) => {
    const li = document.createElement("li");
    li.textContent = result.content;
    resultsContainer.appendChild(li);
  });
}
