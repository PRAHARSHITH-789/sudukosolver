import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Test from './test1';
import Resulted from './resulted';
import "./cssofmain.css";
import Footer from './footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    
<body >
<div>
<h6>hello buddy !</h6> Sudoku is a popular puzzle game that involves filling a 9x9 grid with numbers. The grid is divided into nine 3x3 sub-grids, called "regions" or "boxes." Here are the basic rules:<br/>

1. <b>Grid Structure:  </b>*The grid is a 9x9 matrix, which is divided into nine smaller 3x3 grids.<br/>

2. <b>Objective: </b>The goal is to fill the entire grid with numbers from 1 to 9..<br/>

3. <b>Unique Numbers</b>: Each number from 1 to 9 must appear exactly once in each row, each column, and each 3x3 sub-grid..<br/>

4. <b>Initial Clues</b>: The puzzle starts with some numbers already filled in. These are called "given numbers" or "clues.".<br/>

5. <b>No Repetition </b>: No number can repeat in any row, column, or 3x3 sub-grid. <br/>

6. <b>Solving</b>: The puzzle is solved when all the cells are filled correctly according to these rules..<br/>
<br></br>

Sudoku puzzles vary in difficulty, and solving them involves a mix of logic, deduction, and sometimesss trial and error..<br/>

<h5>NOW Here ! i  bring the solution of any suduko with 
   one click</h5>
</div>
    <Resulted/>
<Footer/>
    </body>
    </> 
 
);


reportWebVitals();
