import './App.css';

import {
  Routes,
  Route
} from "react-router-dom";
import { AddProduct } from './pages/AddProduct';
import {  Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route index path="/add_produto" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;