/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

const Card = ({ data }) => {
  return (
    <>
      <div className="cardText">
        <label>Title: </label>
        <span>{data?.text}</span>
      </div>
      <div className="cardCountry">
        <label>Country: </label>
        <span>{data?.country}</span>
      </div>
      <div className="cardVersion">
        <label>Version: </label>
        <span>{data?.version}</span>
      </div>
    </>
  );
};

export default Card;
