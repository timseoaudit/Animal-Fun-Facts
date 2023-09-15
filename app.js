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
const background = <img src="./images/ocean.jpg" className="background" alt="ocean" />;
const animalFacts = (
<div>
    <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
    {background}
</div>
);

for(const animal in animals) {
    images.push(<img key= {animal} className="animal" alt={animal} src={animals[animal.image]} aria-label={animal} role="button" />)
};

root.render(animalFacts);