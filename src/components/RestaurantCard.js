import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const{resData}=props;
    console.log(resData)
    console.log(props)
    const {name,cuisines,avgRating,cloudinaryImageId}=resData?.info
    return(
        <div className="restaurant-card">
            <img className="res-logo" alt="res-logo" src={CDN_URL +
          cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} stars</h5>
        </div>
    )
}

export default RestaurantCard