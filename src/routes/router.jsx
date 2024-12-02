import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CouponCategory from "../pages/CouponCategory";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Brands from "../pages/Brands";
import MyProfile from "../pages/MyProfile";
import About from "../pages/About";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TopBrands from "../components/TopBrands";
import BrandDetails from "../pages/BrandDetails";
import PrivateRoute from "./PrivateRoute";
import Letter from "../pages/Letter";
import Fest from "../pages/Fest";
import Forget from "../pages/Forget";
import UpdateProfile from "../pages/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/topBrands",
        element: <TopBrands></TopBrands>,
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
        loader: () => fetch("/data.json"),
      },

      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/letter",
        element: <Letter></Letter>,
      },
      {
        path: "/fest",
        element: <Fest></Fest>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forget",
        element: <Forget></Forget>,
      },
      {
        path: "/auth/update",
        element: <UpdateProfile></UpdateProfile>,
      },
    ],
  },
  {
    path: "/brand/:id",
    element: (
      <PrivateRoute>
        <BrandDetails></BrandDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/data.json"),
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
  ,
]);

export default router;
