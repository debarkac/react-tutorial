import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"


// const RestaurantCard=({restaurantName,cuisine})------>can also write like this---->directly destructuring the props object






const AppLayout=()=>{
    return(
        <div className="root">
            <Header />
            <Body />
        </div>
    )
}





const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
