import './App.css';

import {
  Routes,
  Route
} from "react-router-dom";
import { Home } from './pages/Home';
import { AddProduct } from './pages/AddProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route index path="/produto" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;