import logo from './logo.svg';
import './App.css';

import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const title = '';

const background = <img
  className='background'
  alt='ocean'
  src='/images/ocean.jpg'
  />;

  const displayFacts = (e) => {
    const animal = e.target.alt;
    const index = Math.floor(Math.random() * animals[animal].facts.length);
    const funFact = animals[animal].facts[index];
    const p = document.getElementById('fact');
    p.innerHTML = funFact;
  }

const images = [];
for(const animal in animals) {
    const image = (
        <img
        onClick={displayFacts}
        key={animal}
        className='animal'
        alt={animal}
        src={animals[animal].image}
        aria-label={animal}
        role='button'
        />
    );
    images.push(image);
}




const animalFacts = (
<div>
    <h1>{title === ''? 'Click an animal for a fun facts!' : title}</h1>
    {background}
    <p id='fact'></p>
    <div className='animals'>
        {images}
    </div>
</div>);

// boilerplate script
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          i love you Viana
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
root.render(animalFacts);
export default App;
