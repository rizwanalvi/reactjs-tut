import logo from './logo.svg';
import './App.css';
import { NavBar } from './component/NavBar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Home } from './component/Home';
import { Product } from './component/Product';
import { Contact } from './component/Contact';
function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <NavBar />
     <Routes>
      <Route index path='/' element={<Home/>} />
      <Route path='/product' element={<Product/>} />
      <Route path='/contact' element={<Contact/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
