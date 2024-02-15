/* W05: Programming Tasks */
/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        // Step 1: Create an HTML <article> element
        const articleElement = document.createElement('article');

        // Step 2: Create an HTML <h3> element and add the temple's templeName property
        const h3Element = document.createElement('h3');
        h3Element.textContent = temple.templeName;

        // Step 3: Create an HTML <img> element and add the temple's imageUrl and location properties
        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', temple.imageUrl);
        imgElement.setAttribute('alt', temple.location);

        // Step 4: Append the <h3> element and the <img> element to the <article> element as children
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        // Step 5: Append the <article> element to the global templesElement variable
        templesElement.appendChild(articleElement);
    });
};

/* async getTemples Function using fetch() */
const getTemples = async () => {
    // Fetch temple data from the provided URL
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    // Parse the JSON response
    const templeData = await response.json();

    // Assign the parsed data to the global templeList array variable
    templeList = templeData;

    // Display the temples on the webpage
    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    // Get all <article> elements inside templesElement
    const templeArticles = templesElement.querySelectorAll('article');
    
    // Iterate over each <article> element and remove it
    templeArticles.forEach(article => {
        article.remove();
    });
};

/* filterTemples Function */
const filterTemples = (temples) => {
    // Clear the output
    reset();

    // Get the value of the HTML element with ID "filtered" (the dropdown menu)
    const filter = document.getElementById('filtered').value;

    // Switch statement to handle different filter cases
    switch (filter) {
        case 'utah':
            // Filter for temples located in Utah
            displayTemples(temples.filter(temple => temple.location.toLowerCase().includes('utah, united states')));
            break;
        case 'notutah':
            // Filter for temples located outside Utah
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            // Filter for temples built before 1950
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'alphabetical':
            // Sort temples alphabetically by temple name
            displayTemples(temples.slice().sort((a, b) => a.templeName.localeCompare(b.templeName)));
            break;    
        case 'all':
        default:
            // Display all temples
            displayTemples(temples);
            break;
    }
};

/* Event Listener */
// Add a change event listener to the HTML element with ID "filtered"
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

// Fetch temple data and display it on page load
getTemples();

