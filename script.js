// DOM
const quotesContainer = document.getElementById("quote-container");
const quotesText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];
// Show New Quote
function newQuote() {
  const Quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  authorText.textContent = Quote.author;
  if (!Quote.author) {
    authorText.textContent = "Unknown";
  }
  quotesText.textContent = Quote.text;
}
// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quotesText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}
// Event Listener
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);
// Get Quotes From APIs
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.log(error);
  }
}

// On Load
getQuotes();
