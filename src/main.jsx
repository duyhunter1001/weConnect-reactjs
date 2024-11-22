import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "@pages/RootLayout";
import { ModalProvider } from "@contexts/ModalProvider";
import { ThemeProvider } from "@mui/material";
import muiConfig from "@configs/muiConfig";

const HomePage = lazy(() => import("@pages/HomePage"));

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={muiConfig}>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
