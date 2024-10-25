import React from "react";
import { useState } from "react";

const ActorForm = ({ setSearchQuery }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      setSearchQuery(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setInputValue(event.target.value)} 
          placeholder="Actor's/ Actress' name"
          type="text"
          value={inputValue}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};
export default ActorForm;

