/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Ezra Taft Brigham Essien";
let currentYear = 2024;
let profilePicture = "images/taft.jpg";




/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("picture img")


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute(`src`, profilePicture);
imageElement.setAttribute(`alt`, `profile image of ${fullName}`)






/* Step 5 - Array */

// Creating a variable that stores an array of food
let favFood = [
    "Jollof Rice",
    "Waakye",
    "Banku and Tilapia",
    "Fufu and Light Soup",
    "Plantain and Beans Stew",
    "Yam and Kontomire Stew",
    "Tuo Zaafi with Ayoyo Soup",
    "Fante Kenkey with Fish",
];

// displaying the array in the foodElement html
foodElement.innerHTML = favFood;

// declaring a variable to hold one item
let singleFood = "fante fante";

// adding the new food to the array
// appending and displaying the results
favFood.push(singleFood);
foodElement.innerHTML += `<br>${favFood}`;

// removing the first item on the Array
// appending and displaying the results
favFood.shift();
foodElement.innerHTML += `<br>${favFood}`;

// removing the last item on the Array
// appending and displaying the results
favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;





