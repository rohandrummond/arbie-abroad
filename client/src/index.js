import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Posts from "./Posts";
import About from "./About";
import Users from "./Users";
import ManagePosts from "./ManagePosts";
import CreatePost from "./CreatePost";
import Post from "./Post";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='posts' element={<Posts />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='manage-posts' element={<ManagePosts />} />
        <Route path='create-post' element={<CreatePost />} />
        <Route path='users' element={<Users />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);