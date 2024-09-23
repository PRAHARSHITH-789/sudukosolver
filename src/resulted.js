import React, { useState } from 'react';
import "./sudoko.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Resulted() {
let bahubali= Array(9).fill(null).map(() => Array(9).fill(""))

  const [sudoku, setSudoku] = useState(bahubali);
   const [data,setdata]=useState("");
  const clear=()=>{
 setSudoku(bahubali);
  }
  const isValid = (grid, row, col, num) => {
    for (let x = 0; x < 9; x++) {
      if (grid[row][x] === num || grid[x][col] === num) {
        return false;
      }
    }

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[i + startRow][j + startCol] === num) {
          return false;
        }
      }
    }

    return true;
  };

  const solveSudoku = () => {
    const solve = (grid) => {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (grid[row][col] === "") {
            for (let num = 1; num <= 9; num++) {
              const numStr = num.toString();
              if (isValid(grid, row, col, numStr)) {
                grid[row][col] = numStr;

                if (solve(grid)) {
                  return true;
                }

                grid[row][col] = "";
              }
            }
            return false; 
          }
        }
      }
      return true; 
    };

    const grid = sudoku.map(row => [...row]);
    if (solve(grid)) {
      setSudoku(grid);
    } 
  };

  const handleChange = (row, col, value) => {
    if (/^[1-9]?$/.test(value)) {
        const getsudoku = sudoku.map((r, i) =>
          r.map((cell, j) => (i === row && j === col ? value : cell))
        );
    setSudoku(getsudoku);
   } };

  const handleSubmit = (e) => {
    e.preventDefault();
    solveSudoku();
  };

 

    const change = () => {
        const containers = document.getElementsByClassName("container");
        for (let i = 0; i < containers.length; i++) {
          containers[i].style.display = "block";
        }
        const container = document.getElementsByClassName("details");
        for (let i = 0; i < container.length; i++) {
          container[i].style.display = "none";
        }

        window.alert("plz enter the valid clues .if your enter the wrong clues  output is not generated .then refresh the page")
      
      };  

      const change1=()=>{
        const containers = document.getElementsByClassName("details");
        for (let i = 0; i < containers.length; i++) {
          containers[i].style.display = "block";
        }

document.getElementById('eyy').style.display="none";
      }
 const hsubmit= async (e)=>{
e.preventDefault();
console.log({data});

  try {
    const response = await fetch("http://localhost:8080", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({data}), 
    });

    const result = await response.json();
    setdata(result);
    console.log(result); 
   
  } 
  
  catch (error) {
    console.error("Error submitting form:", error);
  }
};
const hchange=(e)=>{


  setdata(e.target.value);

}
  return (<>
      <button  id="eyy" onClick={change1}>Try This </button>

   <div  className='details'>
    <form onSubmit={hsubmit}>
<label>Name:</label>
        <input type="text" placeholder='enter yours'  name='name'  value={data} onChange={hchange}/>
        <button onClick={change}>Enter</button>
</form>
    </div>
   
    <div className='container  '>
      <form onSubmit={handleSubmit} className='form'>
        <div  className="row   " >
        {sudoku.map((row, rowIndex) => (
          <div  key={rowIndex}>
            {row.map((cell, colIndex) => (
              <input
                key={colIndex}
                type="text"
                maxLength={1}
                value={cell}
                onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
           
              />
            ))}
          </div>
         
        ))}
        <br/>
        <br/>
        <br/>
       
        </div>
        <button type="submit"  >Solve</button></form>
        <br/>
        <button  onClick={clear}>
        clear 
      </button>
      
    
     <p></p>
    </div>
    </>
  );
}