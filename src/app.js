import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// const RestaurantCard=({restaurantName,cuisine})------>can also write like this---->directly destructuring the props object

const AppLayout = () => {
  return (
    <div className="root">
      <Header />
      <Outlet />
      {/* <Body /> */}
    </div>
  );
};

//earlier we were creating individual routes for the pages.
// const appRounter=createBrowserRouter([
//     {
//         path:"/",
//         element:<AppLayout />,
//         errorElement:<Error />,
//     },
//     {
//         path:"/aboutus",
//         element:<AboutUs />,
//     },
//     {
//         path:"/contact",
//         element:<Contact />,
//     },

// ]);

//now we will use outlet to pass the children as routes
//by doing this the header is always getting displayed
const appRounter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
        {
            path:"/",
            element:<Body />
        },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//we are routing the react page
root.render(<RouterProvider router={appRounter} />);
