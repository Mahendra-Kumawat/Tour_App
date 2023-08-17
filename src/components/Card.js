import React, { useState } from "react";
// import NewCard from "./NewCard";

const Card = (props) => {
  let tour = props.tour;

  let removeHandler = props.removeHandler;

  // to create a state varibles
  const [readmore, setReadmore] = useState(true) 

  let description = readmore ? `${tour.info.substr(0,200)}....` : `${tour.info}`
  
  
  function buttonHandler(){
    setReadmore(!readmore)
  }

  // console.log(tour)
  return (
    <div className="container">
      <div className="image-container">
        <img src={tour.image} alt="" className="image"/>
      </div>

      <div className="tour-details">
        <div className="price">
          {tour.price}
        </div>

        <div className="city-name">
          {tour.name}
        </div>


        <div className="tour-data"> 
            {description}
            <span className="read-more" onClick={buttonHandler}>
                {
                  readmore ? "ReadMore" : "ShowLess"
                }
            </span>
        </div>
        <div className="buttons">
          <button className="btn">Interest</button>
          <button className="btn" onClick={() => removeHandler(tour.id)}>Not Interest </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
