// Array of background image URLs
const backgroundImages = [

  'images/c1.jpg',
  'images/c2.jpg',
  'images/c3.jpg',
  'images/c4.jpg',
  'images/c5.jpg',
  'images/c6.jpg',
  'images/c7.jpg',
  'images/c8.jpg',
  'images/c9.jpg',
  'images/c10.jpg',
  'images/c11.jpg',
  'images/c12.jpg',
  'images/c13.jpg',
  'images/c14.jpg',
  'images/c15.jpg',
  'images/c16.jpg',
  'images/c17.jpg',
  'images/c18.jpg',
  'images/c19.jpg',
  'images/c20.jpg',
  'images/c21.jpg',
  'images/c22.jpg',
  'images/c23.jpg',
  'images/c24.jpg',
  'images/c25.jpg',
];

// Function to change the background image
function changeBackgroundImage() {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  document.body.style.backgroundImage = `url('${backgroundImages[randomIndex]}')`;
}

// Fetch data from mocky.io
async function fetchData() {
  try {
    const response = await fetch('https://run.mocky.io/v3/d2d4dfea-e257-4c4e-8fc3-03af47991f39');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to generate a random quote
function generateQuote(data) {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}

// Function to display the quote on the webpage
function displayQuote(quote) {
  const quoteTextElement = document.getElementById('quote-text');
  const authorTextElement = document.getElementById('author-text');

  quoteTextElement.textContent = `"${quote.en}"`;
  authorTextElement.textContent = `~ ${quote.author}`;

  // Change background image when displaying a new quote
  changeBackgroundImage();
}

// Function to change the quote
async function changeQuote() {
  const data = await fetchData();
  if (data) {
    const quote = generateQuote(data);
    displayQuote(quote);
  }
}


// }
// Function to share quote on LinkedIn
function shareOnLinkedIn() {
  const quoteText = document.getElementById('quote-text').innerText;
  const quoteAuthor = document.getElementById('author-text').innerText;
  const linkedInURL = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(quoteText)} - ${encodeURIComponent(quoteAuthor)}`;
  window.open(linkedInURL, '_blank');
}


// Main function to fetch data and display initial quote
async function main() {
  const data = await fetchData();
  if (data) {
    const quote = generateQuote(data);
    displayQuote(quote);
  }
}

// Event listeners for buttons
document.getElementById('change-quote-btn').addEventListener('click', changeQuote);
document.getElementById('share-linkedin-btn').addEventListener('click', shareOnLinkedIn);

main();
