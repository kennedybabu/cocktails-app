import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Cocktail from './pages/Cocktail'
import Header from './components/Header'



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cocktail/:id' element={<Cocktail />} />
      </Routes>
    </div>
  );
}

export default App;
