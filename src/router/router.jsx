import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import NewCompo from "../components/NewCompo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/home",
        element: <MainLayout></MainLayout>,
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
]);

export default router;