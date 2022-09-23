import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Menu from './pages/Menu/Menu';
import Basket from './pages/Basket/Basket';
import Product from './pages/Product/Product';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/basket" element={<Basket/>}/>
      </Routes>
    </div>
  );
}

export default App;
