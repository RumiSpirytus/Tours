import React from "react";
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom'
import PostCreate from "./PostCreate";
import PostList from "./PostList";
import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Hero from "./components/Hero";
import Tour from "./pages/tour/Tour";

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: 
      <>
        <Hero/>
      </>
    },
    {
      path: '/home',
      element: 
      <>
        <NavBar/>
        <Home/>
      </>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    },
    {
      path: '/tour/:id',
      element: 
      <>
        <NavBar/>
        <Tour/>
      </>
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};
export default App;
