import React from "react";
import { useState, useEffect } from "react";
import ActorForm from "./ActorForm";
import LoadingMessage from "./LoadingMessage";
import ErrorMessage from "./ErrorMessage";
import ActorList from "./ActorList";
const ActorDiscoveryApp = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [actors, setActor] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchActor = async (searchQuery) => {
    try {
      setLoading(true);
      setErrorMessage(null);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/person?api_key=14b48afc004a5b354679b7cb94d2e725&query=${encodeURIComponent(
          searchQuery
        )}`
      );
      if (!response.ok) {
        throw new Error("Actor was not found");
      }
      const data = await response.json();
      setActor(data.results);
      console.log(data);
    } catch (error) {
      setErrorMessage(error);
      setActor([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (searchQuery) {
      fetchActor(searchQuery);
    }
  }, [searchQuery]);

  return (
    <section>
      <h2>Actor Discovery App</h2>
      <ActorForm setSearchQuery={setSearchQuery}></ActorForm>
      {loading && <LoadingMessage />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <ActorList actors={actors}></ActorList>
    </section>
  );
};

export default ActorDiscoveryApp;
