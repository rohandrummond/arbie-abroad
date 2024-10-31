import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Posts from './Posts';
import About from './About';
import Users from './Users';
import ManagePosts from './ManagePosts';
import CreatePost from './CreatePost';
import Post from './Post';
import Redux from './Redux';
import PageForbidden from './PageForbidden';
import PageNotFound from './PageNotFound';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
            <Route path='/posts/:id' element={<Post />} />
            <Route path='/redux' element={<Redux />} />
            <Route path='/forbidden' element={<PageForbidden />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);