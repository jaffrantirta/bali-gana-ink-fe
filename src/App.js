import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/galleries' element={<Gallery />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
