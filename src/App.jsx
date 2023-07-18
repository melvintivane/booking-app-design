import * as React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Hotel from "./pages/Hotel/Hotel";
import List from "./pages/List/List";
import Header from "./components/Header/Header";
import Attractions from "./pages/Attractions/Attractions";


const Layout = () => {
  return (
    <div className="app">
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/hotels",
        element: <List />,
      },
      {
        path: "/hotels/:id",
        element: <Hotel />,
      },
      {
        path: "/attractions",
        element: <Attractions />,
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;