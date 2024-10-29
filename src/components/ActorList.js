import React from "react";
import { Link } from "react-router-dom";

const ActorList = ({ actors }) => {
  const actorArray = Array.isArray(actors) ? actors : [actors];

  return (
    <section>
      {actorArray.map((actor) => (
        <div key={actor.id}>
          <h3>{actor.name}</h3>
          <Link to={`/ActorDetails/${actor.id}`} state={{ actor }}>
            Read More
          </Link>
        </div>
      ))}
    </section>
  );
};

export default ActorList;
