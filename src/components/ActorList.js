import React from "react";
import LazyLoadImage from "./LazyLoadImage"; // Ensure you have LazyLoadImage in the same directory

const ActorList = ({ actors }) => {
  const actorArray = Array.isArray(actors) ? actors : [actors];

  return (
    <section>
      {actorArray.map((actor) => (
        <div key={actor.id}>
          <h3>{actor.name}</h3>
          {actor.profile_path && (
            <LazyLoadImage
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
              placeholder="https://via.placeholder.com/100x150" // Add a placeholder image URL
            />
          )}
          <p>Actor Popularity: {actor.popularity}</p>
          <p>Known for:</p>
          {actor.known_for.map((element) => (
            <div key={element.id}>
              {element.backdrop_path && (
                <LazyLoadImage
                  src={`https://image.tmdb.org/t/p/w500${element.backdrop_path}`}
                  alt={element.title}
                  placeholder="https://via.placeholder.com/100x150" // Add a placeholder image URL
                />
              )}
              <p>{element.title}</p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default ActorList;
