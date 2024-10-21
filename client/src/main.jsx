import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/Error.jsx';
import About from './pages/About.jsx';
import Navbar from './components/Navbar.jsx';
import PostPage from './pages/PostPage.jsx';
import Footer from './components/Footer.jsx';

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage />, },
  { path: "/about", element: <About />, errorElement: <ErrorPage />, },
  { path: "/posts/:id", element: <PostPage />, errorElement: <ErrorPage />, },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    {/* <App /> */}
    <Footer />
  </React.StrictMode>,
)
