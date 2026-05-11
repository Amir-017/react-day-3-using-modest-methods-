import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App";
import "./index.css";
import MainLayout from "./layout/MainLayout";
// import Cart from "./pages/Cart";
// import Home from "./pages/Home";
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        lazy: () => import("./pages/Home"),
      },
      {
        path: "/cart",
        lazy: () => import("./pages/Cart"),
      },
       {
        path: "/product/:id",
        lazy: () => import("./pages/ProductDetails"),
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
