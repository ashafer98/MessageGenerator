// scripts.js

function getRandomQuote() {
    const quotes = [
        "The best way to predict the future is to create it. – Peter Drucker",
        "You miss 100% of the shots you don’t take. – Wayne Gretzky",
        "I have not failed. I’ve just found 10,000 ways that won’t work. – Thomas Edison",
        "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
        "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
        "The only way to do great work is to love what you do. – Steve Jobs",
        "If you are not willing to risk the usual, you will have to settle for the ordinary. – Jim Rohn",
        "Believe you can and you’re halfway there. – Theodore Roosevelt"
    ]; 
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayMessage() {
    document.getElementById('message').innerText = getRandomQuote();
}

function clearMessage() {
    document.getElementById('message').innerText = '';
}