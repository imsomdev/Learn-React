import { CARDS_IMG_URL } from "../config";

const RestaurantsCards = (props) => {
  return (
    <div className="card">
      <img src={CARDS_IMG_URL + props.restaurant.info.cloudinaryImageId}></img>
      <h2>{props.restaurant.info.name}</h2>
      <h3>{props.restaurant.info.avgRating}</h3>
      <h4>{props.restaurant.info.cuisines.join(", ")}</h4>
    </div>
  );
};
export default RestaurantsCards;
