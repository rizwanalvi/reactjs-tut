import logo from './logo.svg';
import './App.css';
import {Heading,Heading1} from './DumTest';
import { NewHeading,NewHeading1 } from './Dumtest01';
import { useState } from 'react';
function App() {
  const [newState,setName] = useState('No One Here')
  return (
    <div className="App">
      <h1>Happy Eid!</h1>
      <input type='text' onChange={()=>{setName('Ahmed Khan 01')}} /> 
      <Heading />
      <Heading1 />
      <Heading />
      <Heading />
      <NewHeading name={newState} />
      <NewHeading1 />
      <NewHeading1 />
      <NewHeading1 />
      <NewHeading1 />
      <button onClick={()=>{setName('Ahmed Khan')}}>Change Value</button>
    
    </div>
  );
}

export default App;
