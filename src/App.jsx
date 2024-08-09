import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TwCardsPage from "./pages/TwCards";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <TwCardsPage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
