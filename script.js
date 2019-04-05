var bgColors = [
  'Gold',
  'Blue',
  'Silver',
  'Teal',
  'Orange'
  ];

let quotes = [
  {quote: "Defining myself is one of the most difficult challenges I face.",
   source: "Carol Moseley-Braun",
  },
  {quote: "Hate is too great a burden to bear. It injures the hater more than it injures the hated.", 
   source: "Coretta Scott King",
  },
  {quote: "In recognizing the humanity of our fellow beings we pay ourselves the highest tribute.",
   source: "Thurgood Marshall",
  },
  {quote: "Whatever we believe about ourselves and our ability comes true for us.",
   source: "Susan L. Taylor",
  },
  {quote: "Imagination is more important than knowledge.", 
   source: "Albert Einstein" ,
  }
];



//Created random generator 

function getRandomQuote () {
   var randomQuote = Math.floor(Math.random() * quotes.length);
   return quotes[randomQuote];
};

getRandomQuote();


//print function 

function printQuote() {
  var getQuote = getRandomQuote();
  var stringOfQuoteProperties = '<p class="quote">' + getQuote.quote + '</p>';
  stringOfQuoteProperties += '<p class="source">' + getQuote.source;



document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
};

printQuote();



function getRandomColor() {
  var randomColor = Math.floor(Math.random() * bgColors.length);
  return bgColors[randomColor];
};

// bgcolor change
function setBackgroundColor() {
  var generateColor = getRandomColor(bgColors);
  document.querySelector("body").style.background = generateColor;
}

setBackgroundColor();


document.getElementById('loadQuote').addEventListener("click", printQuote, false);

document.getElementById('loadQuote').addEventListener("click", setBackgroundColor, false);

