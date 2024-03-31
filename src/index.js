import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Outlet,RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient,QueryClientProvider } from "react-query";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <App />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
);
