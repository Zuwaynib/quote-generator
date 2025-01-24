let quoteText = document.querySelector("#quote-text");
let authorName = document.querySelector("#author-name");

const quoteButton = document.querySelector("#quote-button");
const soundOn = document.querySelector(".sound");
const copyText = document.querySelector(".copy");
const twitterButton = document.querySelector(".twitter");

function generateQuote() {
    quoteButton.classList.add("loading");
    quoteButton.textContent = "Loading Quote...";
    fetch('https://quotes-api-self.vercel.app/quote')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        quoteText.textContent = data.quote;
        authorName.textContent = data.author;
        quoteButton.textContent = "New Quote";
        quoteButton.classList.remove("loading");
  })
    .catch(error => {
    console.error(error);
  });
}

function addSound() {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.textContent} by ${ authorName.textContent}`);
    speechSynthesis.speak(utterance);
}

function copy() {
    navigator.clipboard.writeText(quoteText.textContent);
}

function twitter() {
    let tweetText = encodeURIComponent(`${quoteText.textContent} - ${authorName.textContent}`);
    let tweetUrl = `https://x.com/compose/post?text=${tweetText}`;
    window.open(tweetUrl, "_blank");
}