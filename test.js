// variables from tasks ouside functions
let quoteHistory = document.querySelector('#quote-history');
let quotesList = ['']
//let firstElement = newQuote.textContent

// click button
let button = document.querySelector('#new-quote-button');
button.addEventListener('click', getQuote);


// write function
async function getQuote() {
    let response = await fetch(`https://meowfacts.herokuapp.com/`);
    let data = await response.json()
    let quote = document.querySelector('#quote');
    quote.textContent = data.data[0];

    //let q = document.querySelectorAll('li');
    //let historyList = addQuote(quote.textContent);
    //;
    if (quotesList.includes(quote.textContent)===false) {
        //firstElement = document.querySelector('li');
        addQuote(quote.textContent);
        quotesList.push(quote.textContent);
        console.log('test - first element')
        }
        else  {
            if (quotesList[0]==='') {
                console.log('test')
                addQuote(quote.textContent);
                quotesList[0]=quote.textContent;
                console.log('quote: ',quote.textContent)
            }
        

            else if (quotesList.includes(quote.textContent)) {
                // delete element somehow
                //q.delete(quote.textContent)

                console.log('ok')
                console.log(quotesList)
                console.log('quote: ',quote.textContent)
            }
        }
   
    
    
    
}
getQuote();


// write second function
function addQuote(oneString) {
    const newQuote = document.createElement('li');
    newQuote.textContent= oneString
    quoteHistory.append(newQuote);
    //let quotesList = document.querySelectorAll('li');
    //return newQuote;
    
}

