import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Places from './Places';
import About from './About';
import Users from './Users';
import ManagePosts from './ManagePosts';
import CreatePost from './CreatePost';
import Post from './Post';
import Redux from './Redux';
import PageForbidden from './PageForbidden';
import PageNotFound from './PageNotFound';
import './index.css'
import './fonts.css'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='places' element={<Places />} />
            <Route path='about' element={<About />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='manage-posts' element={<ManagePosts />} />
            <Route path='create-post' element={<CreatePost />} />
            <Route path='users' element={<Users />} />
            <Route path='/posts/:name' element={<Post />} />
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