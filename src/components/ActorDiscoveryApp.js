import React from "react";
import { useState, useEffect } from "react";

const ActorDiscoveryApp = () => {
  const [actors, setActor] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [actorsPerPage] = useState(10);

  const fetchActor = async (actors) => {
    try {
      setLoading(true);
      setErrorMessage(null);
      const response = await fetch(
        "https://api.themoviedb.org/3/search/person?api_key=14b48afc004a5b354679b7cb94d2e725&query=ACTOR_NAME"
      );
      if (!response.ok) {
        throw new Error("Actor was not found");
      }
      const data = await response.json();
      setActor(data);
    } catch (error) {
      setErrorMessage(error);
      setActor("");
    } finally {
      setLoading(false);
    }

    useEffect(() => {
      fetchActor(actors);
    }, [actors]);
  };

  const indexOfLastActor = currentPage * actorsPerPage
  const indexOfFirstActor = indexOfLastActor - blogsPerPage
  const currentActors = actors.slice(indexOfFirstActor, indexOfLastActor)
  return(
    <section>
        
    </section>
  )
};

export default ActorDiscoveryApp;
