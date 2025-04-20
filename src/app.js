import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import userContext from "./utils/userContext";

// const RestaurantCard=({restaurantName,cuisine})------>can also write like this---->directly destructuring the props object



//here instead of import Grocery we are using lazy loading. what it does is that it creates two bundling files when the grocery button is clicked. we use suspense to wrap the component
//for this lazy loading all the code does not come at once. it will come only when it is requested
const Grocery=lazy(()=>import("./components/Grocery"))



const AppLayout = () => {

  const [userName,setUserName]=useState();

  useEffect(()=>{
    const data={
      name:"Debarka Chakraborti"
    }
  
    setUserName(data.name);
  },[])


  return (

    // what happens here is that the whole app is getting the user. setUserName is passed so that the context can be changed anywhere in the app
    <userContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="root">
      <Header />
      <Outlet />
      {/* <Body /> */}
    </div>
    </userContext.Provider>
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


      //this uses Suspense which is an interesting concept
      {
        path:"/grocery",
        element:(
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        )
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
