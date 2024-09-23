//Import React
import React from 'react';
import ReactDOM from 'react-dom/client';

//Import CSS
import './styles.css'

//You first create  the root
const root = ReactDOM.createRoot(document.getElementById('root'));

const fName = "Robson";
const lName = "Silva";
const num = 7;

// Create a element
const element = (
  <div>
    <h1 className='title'>Hello {fName + " " + lName}!</h1>
    <p>Your number is: {num}</p>
  </div>
);

//Render the HTML element on the root
root.render(element);


//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Robson Silva.
//Copyright 2024.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm start
// to launch your react project in your browser


