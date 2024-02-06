/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name : "Ezra Taft Brigham Essien",
    photo : "images/taft.jpg",
    favoriteFoods : [
    "Jollof Rice",
    "Waakye",
    "Banku and Tilapia",
    "Fufu and Light Soup",
    "Plantain and Beans Stew",
    "Yam and Kontomire Stew",
    "Tuo Zaafi with Ayoyo Soup",
    "Fante Kenkey with Fish",
    ],
    Hobbies : [
        "coding",
        "Reading",
        "Writing Raps",
        "Playing BasketBall",
        "Playing Table Tennis",
        "Video Games",
    ],
    placesLived : [],
};






/* Populate Profile Object with placesLive objects */

// adding items to the placesLived array
myProfile.placesLived.push(
    {
        place : "Abuja, NG",
        length: "8 years"
    },
    {
        place : "Takoradi, GH",
        length: "5 years"
    },
    {
        place : "Winneba, GH",
        length: "8 months"
    },
    {
        place : "Dunkwa-on-offin, GH",
        length: "3 years"
    },
    {
        place : "Kumasi, GH",
        length: "3 months"
    },
    {
        place : "Accra, GH",
        length: "6 years"
    },
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
let imageElement = document.querySelector("#photo");

// setting attributes for the photo
if (imageElement) {
   imageElement.setAttribute('src', myProfile.photo);
    imageElement.setAttribute('alt', myProfile.name);
}
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(favoriteFoods => {
    let li = document.createElement("li");
    li.textContent = favoriteFoods;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
// iterating through the favorite food array with forEach
myProfile.Hobbies.forEach(Hobbies => {

    let li = document.createElement("li");
    li.textContent = Hobbies;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});

