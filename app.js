// imports
import { animals } from './animals.js';
import React from 'react';
import { createRoot } from 'react-dom/client';

//root
const container = document.getElementById('app');
const root = createRoot(container);

//function body
const title = '';


const displayFact = (e) => { //displays a random fact when an animal is clicked
    const animal = e.target.alt  // e.target.alt is the value of the alt attribute of the image that was clicked
    const Index = Math.floor(Math.random() * animals[animal].facts.length); // Math.floor rounds down to the nearest whole number
    const funFact = animals[animal].facts[Index]; // animals[animal] is the object in the animals.js file that matches the animal that was clicked. animals[animal].facts is the array of facts for that animal. Index is the random number we generated above. This line selects a random fact from the array of facts.
    const p = document.getElementById('fact') // selects the paragraph with the id of fact
       p.innerHTML = funFact; // sets the innerHTML of the paragraph to the random fact we selected
   
   };
   
const images = []; // empty array to hold the JSX expressions
for(const animal in animals) { // for...it loop that will push a img for each data set in the animals.js file 
    images.push(
        (<img 
        onClick={displayFact}
        key= {animal} 
        className="animal" 
        alt={animal} 
        src={animals[animal].image} 
        aria-label={animal} 
        role="button" />)
    );
}; // assigns values in JSX 

const background = <img src="./images/ocean.jpg" className="background" alt="ocean" />;

const animalFacts = ( // JSX expression that will be rendered
<div>
    <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
    {background}
    <div className="animals">
    {images}
    </div>
    <p id="fact"></p>
</div>
);


//render
root.render(animalFacts);
