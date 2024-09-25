import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Posts from "./Posts";
import About from "./About";
import Users from "./Users";
import CreatePost from "./CreatePost";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='countries' element={<Posts />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='users' element={<Users />} />
        <Route path='create' element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);