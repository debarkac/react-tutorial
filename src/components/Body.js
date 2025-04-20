import RestaurantCard, { closedLabel } from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Body = () => {
  // const [listofRestaurants,setlistofRestaurants]=useState(restaurantList);
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setsearchText] = useState("");

  //calling a higher order component
  //RestaurantCardPromoted will have the card with the promoted label
  const RestaurantCardClosed = closedLabel(RestaurantCard);
  // console.log(RestaurantCardPromoted)

  const { loggedInUser, setUserName } = useContext(userContext);

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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>You are offline</h1>;

  //conditional rendering
  if (listofRestaurants.length === 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search p-4 justify-inline">
          <input
            type="text"
            className="search-box border-2 border-black rounded-lg"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)} //everytime it is changed the component is re rendered again
          ></input>
          <button
            className="px-4 bg-green-200 ml-2 rounded-md items-center"
            onClick={() => {
              const filteredRestaurants = listofRestaurants.filter((res) =>
                res.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className=" flex items-center">
          <button
            className="filter-btn px-4 bg-green-200 rounded-md"
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


        {/* when the username is change in the input box it will automatically change all over the app */}
        <div className="flex items-center text-center mx-8">
           Username: 
          <input
            type="text"
            className="search-box border-2 border-black rounded-lg mx-4"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="restaurant-container flex flex-wrap">
        {/* <RestaurantCard restaurantName="KFC" cuisine="Burger"/> */}
        {/* <RestaurantCard resData={restaurantList[0]}/> */}
        {/* <RestaurantCard resData={restaurantList[1]}/> */}

        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {/* if restaurant is closed then add a label to it */}
            {!restaurant.info.isOpen ? (
              <RestaurantCardClosed resData={restaurant} />
            ) : (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            )}
          </Link>
        ))}
        {/* <RestaurantCard restaurant={restaurantList} /> */}
      </div>
    </div>
  );
};

export default Body;
