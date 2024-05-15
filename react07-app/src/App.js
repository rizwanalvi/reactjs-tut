import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
function App() {
const [data,setdata] = useState(null);
useEffect(() => {
  
  return () => {
    axios.get("https://fakestoreapi.com/products").then(response=>{

      console.log(response.data)
      setdata(response.data)
    });  
  };
}, []);   

  return (
    <div className="App">
      <header className="App-header">
        <uL>
          
       {data ? data.map(item =>
        <li>{item.title}</li>):
        "Loding.."
       }
       
       </uL>
      </header>
    </div>
  );
}

export default App;
