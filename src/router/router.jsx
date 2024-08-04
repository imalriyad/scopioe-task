import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import NewCompo from "../components/NewCompo";
import Home from "../pages/Home";
import Registration from "../Auth/Registration";
import Login from "../Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/new-listing",
        element: <NewCompo props={"New Listing"}></NewCompo>,
      },
      {
        path: "/search",
        element: <NewCompo props={"Search"}></NewCompo>,
      },
      {
        path: "/about",
        element: <NewCompo props={"About"}></NewCompo>,
      },
      {
        path: "/favorites",
        element: <NewCompo props={"Favorites"}></NewCompo>,
      },
      {
        path: "/help",
        element: <NewCompo props={"Help"}></NewCompo>,
      },
      {
        path: "/setting",
        element: <NewCompo props={"Setting"}></NewCompo>,
      },
    ],
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
