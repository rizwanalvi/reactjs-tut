import logo from './logo.svg';
import './App.css';
import { useRef,useState } from 'react';

function App() {
  let userref = useRef();
  let [usemsg,setusermsg] = useState('');
  const OnButtonClick = ()=>{
    const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    console.log(userref.current.value)
    const isvalid = reg.test(userref.current.value);
    console.log(isvalid)
    
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
