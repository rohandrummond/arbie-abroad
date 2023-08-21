import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Countries from "./Countries";
import About from "./About";
import Gallery from "./Gallery";
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='countries' element={<Countries />} />
        <Route path='about' element={<About />} />
        <Route path='gallery' element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// FEFFB8 (yellow)
// FF8300 (orange)