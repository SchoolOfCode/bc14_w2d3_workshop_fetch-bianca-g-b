//create async function called getQuote()
async function getQuote() {
    // use fetch to make request to the API (use url), put in variable
    const response = await fetch(`https://meowfacts.herokuapp.com/`);
    //console.log response for testing purposes
    console.log(response)
    // extract data file from response using await .json
    const data = await response.json();
    // store one quote in a variable
    const quote = data.data[0];
    //place h1 element in a variable
    let h1 = document.querySelector('#quote')
    //add one quote to the h1 text 
    h1.textContent = data.data[0];
    console.log(h1);
    // call the addQuote function that will save the newly generated quote into a list element
    

    let checkList = addQuote(data.data[0])
    for ( let i=0; i<checkList.length; i++) {
        if ( checkList[i].textContent!==data.data[0]) {
            //addQuote(data.data[0]);
            console.log('test')
        }
        else {
            let text = checkList.textContent
            console.log(text)}
    }
    
}

// call the function
getQuote()

// Task 2

// store button with id 'new-quote-button' into a variable
// add eventListener to button
let button = document.querySelector('#new-quote-button');
button.addEventListener('click', getQuote);

// Task 3
//store ol element into a variable
let orderedList = document.querySelector('#quote-history');


// write a function addQuote
function addQuote(quote) {
    //create li element
    let listElement = document.createElement('li');
    //set the listElement text to be the argument passed to the function - the quote
    listElement.textContent = quote;
    // append the list element the ordered list 
    orderedList.appendChild(listElement);
    let allListElement = document.querySelectorAll('li');
    return allListElement;

}

