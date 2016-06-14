var quotes = [
  { content: "You always say you'll be the crocodile, but you never commit!",
    character: 'Pearl' },
  { content: "Love at first sight doesn't exist. Love takes time and love takes work. At the very least, you have to know the other person. And you literally have no idea who or what I am.",
    character: 'Garnet' },
  { content: "APPARENTLY MORE THAN YOU, YOU... CLOD! ",
    character: "Peridot" },
    { content: "Spread your wings and fly",
    character: "Andy Dwyer" },
];

var displayQuote = function() {

  var index = Math.floor((Math.random() * quotes.length));
  var quote = quotes[index];
  var blockquoteElement = document.getElementById('quote-body');
  var attributionElement = document.getElementById('quote-attribution');

  blockquoteElement.innerHTML = quote.content;
  attributionElement.innerHTML = quote.character;
}

document.addEventListener("DOMContentLoaded", displayQuote);
