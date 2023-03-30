import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from "./Pages/About";
import Home from './Pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/about' element={<About />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
