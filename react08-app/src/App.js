import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetProductsList from "./pages/products/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import GetSingleProduct from './pages/products/SingleProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={GetProductsList} />
        <Route path='/product/:id' Component={GetSingleProduct} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
