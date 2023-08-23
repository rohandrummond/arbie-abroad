import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Countries from "./Countries";
import About from "./About";
import Pictures from "./Pictures";
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='countries' element={<Countries />} />
        <Route path='about' element={<About />} />
        <Route path='pictures' element={<Pictures />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// FEFFB8 (yellow)
// FF8300 (orange)