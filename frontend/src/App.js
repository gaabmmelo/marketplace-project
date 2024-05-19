import './App.css';

import {
  Routes,
  Route
} from "react-router-dom";
import { AddProduct } from './pages/Product/AddProduct';
import {  Home } from './pages/Home';
import { AddSale } from 'pages/Sale/AddSale';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route index path="/add_produto" element={<AddProduct />} />
        <Route index path="/add_venda" element={<AddSale />} />
      </Routes>
    </div>
  );
}

export default App;