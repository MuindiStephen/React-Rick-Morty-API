import React from "react";

//Card to display the data from the API
const Card = ({ results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, image, name, location } = x;
    
        return (
          <div
            key={id}
            className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
            style={{justifyContent: "space-around", alignItems: 'center'}}
          >
            <div>
          <img src={image} alt="" />
          <div>
            <div className="fs-5 fw-bold mb-4">{name}</div>
            <div className="">
              <div className="fs-6 fw-normal">Last Location</div>
              <div className="fs-5">{location.name}</div>
            </div>
          </div>
        </div>
      </div>
      );
    });
  }
  else{
    display = "No Characters Found :/";
  }

  return <>{display}</>;
}


export default Card;
