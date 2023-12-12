import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Login from "../../page/Login";
import Register from "../../page/Register";
import Dashboard from "../../page/Dashboard";
import Home from "../../page/Home";
import { Provider } from "react-redux";
import Store from "../../Redux/Store/Store";
import Navbar from "./Navbar";
import Users from "../../page/Users";
import Qualification from "../../page/Qualification";
import Addmore from "../../page/Addmore";
import Qualifications from "../../page/Qualifications";
import Products from "../../page/Products";
import ProductListing from "../../page/ProductListing";
import ProductMDBListing from "../../page/ProductMDBListing";
import Upload from "../../page/Upload";
import TheCalendar from "./TheCalendar";
import ProductForm from "../../page/PrimaryForm";
import PdfPrint from "../../page/PdfPrint";
import ViewFile from "../../page/ViewFile";
import Test from "../../page/Test";
import Rnd from "../../page/Rnd";


const Routing = () => {
  function PrivateRoute({ children }) {
    let token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    return token !== "" && token !== null && token !== undefined ? (
      children
    ) : (
      <Navigate to="/login" />
    );
  }
  const PublicRoutes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "newproduct",
      element: <ProductForm />,
    },
    {
      path: "reactlisting",
      element: <ProductListing />,
    },
    {
      path: "mdblisting",
      element: <ProductMDBListing />,
    },
    {
      path: "upload",
      element: <Upload />,
    },
    {
      path: "calendar",
      element: <TheCalendar />,
    },
    {
      path: "viewfile",
      element: <ViewFile />,
    },
    {
      path: "test",
      element: <Test />,
    },
    {
      path: "rnd",
      element: <Rnd />,
    },
    // {
    //   path: "pdf",
    //   element: <PdfPrint />,
    // },
  ];

  const PrivateRoutes = [
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "/qualification",
      element: <Qualification />,
    },
    {
      path: "/qualifications",
      element: <Qualifications />,
    },
    {
      path: "/products",
      element: <Products />,
    },
  ];
  return (
    <>
      <Provider store={Store}>
        <Router>
          <Navbar />
          <Routes>
            {PublicRoutes?.map((item) => {
              return (
                <>
                  <Route path={item.path} element={item.element} />
                </>
              );
            })}
            {PrivateRoutes?.map((item) => {
              return (
                <>
                  <Route
                    path={item.path}
                    element={<PrivateRoute>{item.element}</PrivateRoute>}
                  />
                </>
              );
            })}
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default Routing;
