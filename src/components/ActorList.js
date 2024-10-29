import React from "react";
import { Link } from "react-router-dom";

const ActorList = ({ actors }) => {
  const actorArray = Array.isArray(actors) ? actors : [actors];

  return (
    <section className="actor-list">
      <div className="actor-card">
        {" "}
        {actorArray.map((actor) => (
          <div key={actor.id}>
            <h3>{actor.name}</h3>
            <Link className="read-more" to={`/ActorDetails/${actor.id}`} state={{ actor }}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActorList;
