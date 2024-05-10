import logo from './logo.svg';
import './App.css';
import { useRef,useState } from 'react';

function App() {
  let userref = useRef();
  let [usemsg,setusermsg] = useState('');
  const OnButtonClick = ()=>{
    
    console.log(userref.current.value)
    if(userref.current.value == ""){

      setusermsg("Input box is Empty")
    }
    else{


    }
  }
  return (
    <div className="App">
    <input  type='text' ref={userref} /> 
    <p>{usemsg}</p>
    <button onClick={OnButtonClick}>Click</button> 
    </div>
  );
}

export default App;
