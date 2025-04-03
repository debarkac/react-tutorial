import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listofRestaurants,setlistofRestaurants]=useState(restaurantList);


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() =>{
            const filterList=listofRestaurants.filter((res)=>res.info.avgRating>4);
            setlistofRestaurants(filterList);//as soon as the button is clicked the component is rerendered which is the power of hooks in react
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {/* <RestaurantCard restaurantName="KFC" cuisine="Burger"/> */}
        {/* <RestaurantCard resData={restaurantList[0]}/> */}
        {/* <RestaurantCard resData={restaurantList[1]}/> */}

        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        {/* <RestaurantCard restaurant={restaurantList} /> */}
      </div>
    </div>
  );
};

export default Body;
