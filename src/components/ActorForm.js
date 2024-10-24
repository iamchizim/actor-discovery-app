import React from "react";
import { useState } from "react";

const ActorForm = ({ setActor }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      setActor(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Input actor's or actress's name"
          type="text"
          value={inputValue}
        ></input>
        <button type="submit">Search</button>
      </form>
    </section>
  );
};
export default ActorForm;
