// variables from tasks ouside functions
let quoteHistory = document.querySelector('#quote-history');

// click button
let button = document.querySelector('#new-quote-button');
button.addEventListener('click', getQuote);


// write function
async function getQuote() {
    let response = await fetch(`https://meowfacts.herokuapp.com/`);
    let data = await response.json()
    let quote = document.querySelector('#quote');
    quote.textContent = data.data[0];
    console.log(quote.textContent)
    addQuote(quote.textContent);
    let q = [];
    q.push(quote.textContent);
    console.log(q)
    
}

getQuote();


// write second function
function addQuote(oneString) {
    const newQuote = document.createElement('li');
    newQuote.textContent= oneString
    quoteHistory.appendChild(newQuote);
    let quotesList = document.querySelectorAll('li');
    //return quotesList;
    
}

// write function to identify duplicates
function duplicates(listElement) {
    for (let i=0; i< listElement.length; i++) {
        if (listElement.textContent!=quote)
        callFunction(quote)
    }
}