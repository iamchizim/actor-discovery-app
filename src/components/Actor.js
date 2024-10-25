import React from "react";

const Actor = ({ actor }) => {
  return (
    <div>
      <h2>{actor.name}</h2>
      <img src={actor.image} alt={actor.name} />
      <p>{actor.bio}</p>
    </div>
  );
};

export default Actor;
