import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Countries from "./Countries";
import About from "./About";
import Singapore from "./Posts/Singapore"
import Melaka from "./Posts/Melaka"
import KualaLumpur from "./Posts/KualaLumpur"
import TamanNegara from "./Posts/TamanNegara"
import NorthSumatra from "./Posts/NorthSumatra"
import Yogyakarta from "./Posts/Yogyakarta"
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
        <Route path='posts/singapore' element={<Singapore />} />
        <Route path='posts/melaka' element={<Melaka />} />
        <Route path='posts/kualalumpur' element={<KualaLumpur />} />
        <Route path='posts/tamannegara' element={<TamanNegara />} />
        <Route path='posts/northsumatra' element={<NorthSumatra />} />
        <Route path='posts/yogyakarta' element={<Yogyakarta />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// FEFFB8 (yellow)
// FF8300 (orange)