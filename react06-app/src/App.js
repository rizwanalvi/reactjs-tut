import logo from './logo.svg';
import './App.css';
import { useRef,useState } from 'react';

function App() {
  let userref = useRef();
  let [usemsg,setusermsg] = useState('');
  let [IsValidEmail,SetEmailValidation] =useState('');
  const OnButtonClick = ()=>{
    const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    console.log(userref.current.value)
    const isvalid = reg.test(userref.current.value)? true:false ;
    SetEmailValidation(isvalid);
   
   
  }
  
  return (
    <div className="App">
    <input  type='text' ref={userref} /> 
    <p>{IsValidEmail}</p>
    <button onClick={OnButtonClick}>Click</button> 
    </div>
  );
}

export default App;
