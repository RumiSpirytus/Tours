import React from "react";
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom'
import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Hero from "./components/Hero";
import Hotel from "./pages/hotel/Hotel";
import CreateHotel from "./pages/createHotel/CreateHotel";

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
      path: '/hotel/:id',
      element: 
      <>
        <NavBar/>
        <Hotel/>
      </>
    },
    {
      path: '/createHotel',
      element: 
      <>
        <NavBar/>
        <CreateHotel/>
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
