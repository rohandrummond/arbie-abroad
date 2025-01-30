import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Redux from './redux/Redux';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Places from './pages/Places/Places';
import Place from './pages/Place/Place';
import About from './pages/About/About';
import ManagePosts from './pages/ManagePosts/ManagePosts';
import CreatePost from './pages/CreatePost/CreatePost';
import EditPost from './pages/EditPost/EditPost'
import Users from './pages/Users/Users';
import PageForbidden from './pages/PageForbidden/PageForbidden';
import PageNotFound from './pages/PageNotFound/PageNotFound';

import './index.css'
import './pages/About/About.css'
import './pages/Places/Places.css'
import './pages/Place/Place.css'
import './pages/ManagePosts/ManagePosts.css'
import './pages/Users/Users.css'
import './components/Nav/Nav.css'
import './components/AuthForm/AuthForm.css'
import './components/Comments/Comments.css'
import './components/PageError/PageError.css'
import './components/Modal/Modal.css'
import './components/Loader/Loader.css'

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
            <Route path='edit-post/:name' element={<EditPost />} />
            <Route path='users' element={<Users />} />
            <Route path='/posts/:name' element={<Place />} />
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