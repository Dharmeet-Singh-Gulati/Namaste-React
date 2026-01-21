import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "../assignment.css";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestrauntMenu from "./components/RestrauntMenu";

const Contact = lazy(() => import("./components/Contact"));

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About name={"Dharmeet"} location={"Delhi"} />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Lazy Loading</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restraunts/:resid",
        element: <RestrauntMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
