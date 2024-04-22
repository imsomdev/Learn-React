import { useEffect, useState } from "react";
import RestaurantsCards from "./RestaurantCard";
import Shimmer from "./Shimmer";
import NoRestaurant from "./NoRestaurant";

const searchRestaurant = (searchText, restaurantList) => {
  return restaurantList.filter((restaurantList) =>
    restaurantList.info.name.toLowerCase().includes(searchText)
  );
};

const BodyComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    getRestaurantData();
    console.log("useEffect");
  }, []);

  async function getRestaurantData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
    );
    console.log(data);
    const json = await data.json();
    console.log(json);
    setAllRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  console.log("render1");
  // if (!allRestaurantList) return null;

  return allRestaurantList.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-component">
        <input
          type="text"
          className="search"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            const searchData = searchRestaurant(
              searchText.toLowerCase(),
              allRestaurantList
            );
            setRestaurant(searchData);
          }}
        >
          Search
        </button>
      </div>

      <div className="card-list">
        {restaurant.length == 0 && <NoRestaurant />}
        {restaurant.map((restaurant) => {
          return (
            <RestaurantsCards
              restaurant={restaurant}
              key={restaurant.info.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
