import { useState } from "react";

/* eslint-disable jsx-a11y/alt-text */
function Card({ id, image, info, price, name, removeTour }) {
  //we make read more  or show less  option to change UI with using State
  const [readMore, setReadMore] = useState(false);

  // we want only specific char in first then we make read more option
  const description = readMore ? info : `${info.substring(0, 200)}...`;

  function handleReadMOre() {
    setReadMore(!readMore);
  }

  // function removeTour(){
  //     console.log("remove tour")
  // }
  // NOTE-: we want to remove the specific tour thus we have remove it from data and data is defined in App,js thus define there no here

  return (
    <div className="card">
      <img src={image} className="image"></img>
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          {description}
          <span className="read-more" onClick={handleReadMOre}>
            {readMore ? "show less" : "read more"};
          </span>
        </div>
      </div>
      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}
export default Card;
