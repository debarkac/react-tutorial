import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  // const [listofRestaurants,setlistofRestaurants]=useState(restaurantList);
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRestaurants,setFilteredRestaurants]=useState([]);

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //at the beginning the api is called a bit later. first the mock data is displayed. in order to directly display the api data, we will pass [] in useState
    console.log(json);

    //this is called optional chaining
    setlistofRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendering
  if (listofRestaurants.length === 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}//everytime it is changed the component is re rendered again
          ></input>
          <button
          onClick={()=>{
            const filteredRestaurants=listofRestaurants.filter((res)=>res.info?.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurants(filteredRestaurants)
          }}>
            Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listofRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setlistofRestaurants(filterList); //as soon as the button is clicked the component is rerendered which is the power of hooks in react
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {/* <RestaurantCard restaurantName="KFC" cuisine="Burger"/> */}
        {/* <RestaurantCard resData={restaurantList[0]}/> */}
        {/* <RestaurantCard resData={restaurantList[1]}/> */}

        {filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard key={restaurant.info.id} resData={restaurant} /></Link>
        ))}
        {/* <RestaurantCard restaurant={restaurantList} /> */}
      </div>
    </div>
  );
};

export default Body;
