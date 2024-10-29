import LazyLoadImage from "../components/LazyLoadImage";
import { useLocation } from "react-router-dom";
const ActorDetails = () => {
  const location = useLocation();
  const { actor } = location.state || {};
  if (!actor) {
    return <div>No details found</div>;
  }

  return (
    <section>
      <div className="actor-details">
        {" "}
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
    </section>
  );
};
export default ActorDetails;
