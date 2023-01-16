import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Cocktail from './pages/Cocktail'

function App() {
  return (
    <div>
      <p className="text-xl">heello</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cocktail/:id' element={<Cocktail />} />
      </Routes>
    </div>
  );
}

export default App;
