
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const[amount,setAmount]=useState(0)
  const[rate,setRate]=useState(0)
  const[year,setYear]=useState(0)
  const[interest,setInterest]=useState(0)

   const Calculate=(e)=>{
    const output=amount*year*rate/100
     
    console.log(output);
    setInterest(output);
   }
   const reset=(e)=>{
    setAmount(0)
    setYear(0)
    setInterest(0)
    setRate(0)
   }
   console.log(amount,year,rate);
  return (
    <div className="App">
 <div className="container">
  <div className="Heading">
     <h1>Simple Interst Calculator</h1>
    <h4>Calculate your simple interst with us </h4>
     </div>
    <div className="total">
       <h3>&#8377; {interest}</h3>
     <p>Your Total Interst</p>
    </div>
    <div className="form">
         <form >
          <div className="input">
          <TextField  className='in' label="Amount"
          onChange={(e)=>setAmount(e.target.value)}
          value={amount||""}
           variant="outlined"/>
          <TextField className='in' label="Rate" 
          onChange={(e)=>setRate(e.target.value)}
          value={rate||""}
          variant="outlined" />                                                                                                                                                                                                                                                                                                                                                                   
          <TextField className='in'
          onChange={(e)=>setYear(e.target.value)} 
          value={year||""}
          label="Year" variant="outlined" />
          </div>
          <div className="button">
          <Button variant="outlined" onClick={Calculate}>Calculate</Button>
          <Button variant="outlined" onClick={reset}>Reset</Button> 
          </div>      
          </form>
          <div> 
          </div>
    </div>
  </div>
    </div>
  );
}

export default App;
