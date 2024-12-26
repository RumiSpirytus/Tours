import React from "react";
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Hero from "./components/Hero";
import Hotel from "./pages/hotel/Hotel";
import CreateHotel from "./pages/createHotel/CreateHotel";
import { Auth0Provider } from "@auth0/auth0-react";

// Wrapper to handle Auth0 redirection
const Auth0Wrapper = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  console.log(domain, clientId);

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

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
    <Auth0Wrapper>
      <div>
        <RouterProvider router={router}/>
      </div>
    </Auth0Wrapper>
  );
};

export default App;
