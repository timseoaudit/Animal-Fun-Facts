// imports
import { animals } from './animals.js';
import React from 'react';
import { createRoot } from 'react-dom/client';

//root
const container = document.getElementById('app');
const root = createRoot(container);

//function body
//varibles 
const title = '';

const images = [];
for(const animal in animals) { // for...it loop that will push a img for each data set in the animals.js file 
    images.push(<img key= {animal} className="animal" alt={animal} src={animals[animal].image} aria-label={animal} role="button" />)
}; // assigns values in JSX 

const background = <img src="./images/ocean.jpg" className="background" alt="ocean" />;

const animalFacts = (
<div>
    <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
    {background}
    <div className="animals">
    {images}
    </div>
</div>
);

const displayFact = (e) => {
 const animal = e.target.alt  
 const Index = Math.floor(Math.random() * animals[animal].facts.length);
 const funFact = animals[animal].facts[Index];
};

root.render(animalFacts);
