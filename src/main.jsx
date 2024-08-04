import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainLayout from "./layout/MainLayout.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import AuthProvider from "./context/AuthProvider.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
      
        <MainLayout></MainLayout>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
