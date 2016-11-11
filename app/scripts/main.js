var quotes = [
  {"name": "Mark Twain", "quote": "Do the right thing. It will gratify some people and astonish the rest."},
  {"name": "Mark Twain", "quote": "Whenever you find yourself on the side of the majority, it is time to pause and reflect."},
  {"name": "Mark Twain", "quote": "The lack of money is the root of all evil."},
  {"name": "Mark Twain", "quote": "The fear of death follows from the fear of life, A man who lives fully is prepared to die at any time."},
  {"name": "Mark Twain", "quote": "The secret of getting ahead is getting started"},
  {"name": "Mark Twain", "quote": "It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt."},
  {"name": "Mark Twain", "quote": "The best way to cheer yourself up is to cheer somebody else up."},
  {"name": "Mark Twain", "quote": "Age is an issue of mind over matter. If you don't mind, it doesn't matter."},
  {"name": "Abraham Lincoln", "quote": "No man has a good enough memory to be a successful liar."},
  {"name": "Don Marquis", "quote": "Procrastination is the art of keeping up with yesterday."},
  {"name": "Jules Renard", "quote": "Laziness is nothing more than the habit of resting before you get tired."},
  {"name": "Confucius", "quote": "Life is really simple, but we insist on making it complicated."},
  {"name": "Confucius", "quote": "It does not matter how slowly you go as long as you do not stop."},
  {"name": "Confucius", "quote": "Everything has beauty, but not everyone sees it."},
  {"name": "Confucius", "quote": "I hear and I forget. I see and I remember. I do and I understand."},
  {"name": "Confucius", "quote": "Better a diamond with a flaw than a pebble without."},
  {"name": "William Shakespeare", "quote": "Love all, trust a few, do wrong to none."},
  {"name": "William Shakespeare", "quote": "Brevity is the soul of wit."},
  {"name": "William Shakespeare", "quote": "A fool thinks himself to be wise, but a wise man knows himself to be a fool."},
  {"name": "William Shakespeare", "quote": "The course of true love never did run smooth."},
  {"name": "William Shakespeare", "quote": "And oftentimes excusing of a fault doth make the fault the worse by the excuse."},
  {"name": "Buddha", "quote": "You will not be punished for your anger, you will be punished by your anger."},
  {"name": "Buddha", "quote": "Without health life is not life; it is only a state of langour and suffering - an image of death."},
  {"name": "Albert Einstein", "quote": "Try not to become a man of success, but rather a man of value."},
  {"name": "Albert Einstein", "quote": "The only source of knowledge is experience."},
  {"name": "Albert Einstein", "quote": "We cannot solve our problems with the same thinking we used when we created them."},
  {"name": "Albert Einstein", "quote": "The difference between stupidity and genius is that genius has its limits."},
  {"name": "Albert Einstein", "quote": "A person who never made a mistake never tried anything new."},
  {"name": "Albert Einstein", "quote": "If we knew what it was we were doing, it would not be called research, would it?"},
  {"name": "Bob Dylan", "quote": "Money doesn't talk, it swears."}
];

$(document).ready(function() {
  populatePageText(randomQuoteObject());
  $("button").on("click", function() {
    populatePageText(randomQuoteObject());
  })
});

function populatePageText(quoteObject) {
  var quote = quoteObject.quote
  var author = quoteObject.name;
  $("#quote").text(quote);
  $("#author").text(author);
  $("#quote-link").attr("href", "https://twitter.com/intent/tweet?text=" + "\"" + quote + "\"" + "  ~ " + author);
}

function randomQuoteObject() {
  var index = randomIndex(quotes.length);
  return quotes[index];
}

function randomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}
